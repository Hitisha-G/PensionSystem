import React, { useEffect, useState } from "react";
import axios from "axios"
import inputValidation from "../constant/inputValidation"
import "./css/register.css"

import pension from "../pension"
import { connect } from "react-redux";
import { register_user } from "../redux/action/userAction";
import { useNavigate } from "react-router-dom";


const Register = (props) => {
  const register_user = props.register_user;
  const user = props.user;
  const mHistory = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    EAddress: "",
    password: "",
    number: "",
    aadhar: "",
    type:"Organization"
  });
  // user data error
  const [formDataError, setformDataError] = useState({
    name: "",
    email: "",
    EAddress: "",
    password: "",
    number: "",
    type:" ",
    aadhar: "",
  });

  const [requestAuth, setRequestAuth] = useState({
    success: '',
    error: '',
    loading: false,
    pending:""
  });

  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    getAddress()
  }, [])

  const token = JSON.parse(localStorage.getItem('user'));
  console.log(token);
  useEffect(() => {
    if (user) {
      return mHistory('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getAddress =  async ()=>{
    try{
      const account = await window.ethereum.request({
           method: "eth_requestAccounts",
           });
       setformData({...formData,EAddress:account[0]})
    }catch(error){
        console.log(error)
    }
  }

  const validateForm = () => {
    let hasError = false;

    let tempError = {
        name: "",
        email: "",
        EAddress: "",
        password: "",
        aadhar: "",
        number: "",
    };

    tempError.email = inputValidation.isInputEmpty(formData.email);
    if (tempError.email !== '') {
      hasError = true;
    }
    tempError.name = inputValidation.isInputEmpty(formData.name);
    if (tempError.name !== '') {
      hasError = true;
    }
    tempError.password = inputValidation.isInputPasswordValid(formData.password);
    if (tempError.password !== '') {
      hasError = true;
    }
    tempError.EAddress = inputValidation.isInputEmpty(formData.EAddress);
    if (tempError.EAddress !== '') {
      hasError = true;
    }
    if(formData.type === "User"){
      tempError.aadhar = inputValidation.isInputEmpty(formData.aadhar);
      if (tempError.aadhar !== '') {
        hasError = true;
    }
    }
    tempError.number = inputValidation.isInputEmpty(formData.number);
    if (tempError.number !== '') {
      hasError = true;
    }
    // tempError.status = inputValidation.isInputEmpty(formData.status);
    // if (tempError.status !== '') {
    //   hasError = true;
    // }

    setformDataError({
      ...formDataError,
      ...tempError,
    });
    console.log(hasError,formData)
    return hasError;
  };

  const onSubmit = async (e) => {
    if (validateForm()) {
      return;
    }
    e.preventDefault()
    try {
      setRequestAuth({
        loading: true,
        error: '',
        success: '',
        pending:'Waiting for transaction success'
      });
      console.log("start")
      const {name , email, password, number , aadhar } = formData
      if(formData.type === 'Organization'){
        const register =    await pension.methods.RegisterO(name,number,email,password).send({from: formData.EAddress});
        console.log({register})
        await register_user(formData);
      }else if(formData.type === 'User'){
        const register =    await pension.methods.RegisterR(name,number,email,aadhar,password).send({from: formData.EAddress});
        console.log({register})
        await register_user(formData);
      }else if(formData.type === 'Validator'){
        const register =    await pension.methods.RegisterV(name,number,email,password).send({from: formData.EAddress});
        console.log({register})
        await register_user(formData);
      }


      setRequestAuth({
        loading: false,
        error: '',
        success: 'You have been entered',
        pending:""
      });

      // mHistory('/');
    } catch (error) {
      console.log(error);
      setRequestAuth({
        loading: false,
        error: "Transaction Failed",
        success: '',
        pending:""
      });
    }
  };


  return (
    <div>
        <div className="text-center">
      <div className="login_container">
      <div className="login_head">Register As {formData.type}</div>
        <form className="text-center form_container" style={{ display: "flex" }}>
        <div className="form-group text-left" style={{ textAlign: 'left' }}>
            {/* <label>Enter Name ID</label> */}
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="form-control p-2  EmailInput"
              value={formData.name}
              onChange={(t) => {
                setformData({
                  ...formData,
                  name: t.target.value,
                });
              }}
            />
            {formDataError.name && (
              <span className="text-danger">{formDataError.name}</span>
            )}
          </div>
          <div className="form-group text-left" style={{ textAlign: 'left' }}>
            {/* <label>Enter Email ID</label> */}
            <input
              type="email"
              name="Email"
              placeholder="Enter your Email"
              className="form-control p-2  EmailInput"
              value={formData.email}
              onChange={(t) => {
                setformData({
                  ...formData,
                  email: t.target.value,
                });
              }}
            />
            {formDataError.email && (
              <span className="text-danger">{formDataError.email}</span>
            )}
          </div>
          <div className="form-group text-left" style={{ textAlign: 'left' }}>
            {/* <label>Enter address ID</label> */}
            <input
              type="number"
              name="number"
              placeholder="Enter your Number"
              className="form-control p-2  EmailInput"
              value={formData.number}
              onChange={(t) => {
                setformData({
                  ...formData,
                  number: t.target.value,
                });
              }}
            />
            {formDataError.number && (
              <span className="text-danger">{formDataError.number}</span>
            )}
          </div>
          {formData.type === "User" && (
             <div className="form-group text-left" style={{ textAlign: 'left' }}>
             {/* <label>Enter address ID</label> */}
             <input
               type="number"
               name="aadhar"
               placeholder="Enter your Aadhar"
               className="form-control p-2  EmailInput"
               value={formData.aadhar}
               onChange={(t) => {
                 setformData({
                   ...formData,
                   aadhar: t.target.value,
                 });
               }}
             />
             {formDataError.aadhar && (
               <span className="text-danger">{formDataError.aadhar}</span>
             )}
           </div>
          )}
         
          <div className={`Container`}>
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                name={'password'}
                id={'password'}
                className="Input"
                value={formData.password}
                placeholder={'Please enter your password'}
                onChange={(e) => {
                  // setShowBtn(true);
                  setformData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
              <img
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                src={
                  showPassword
                    ? '/assets/icons/iconPasswordShow.svg'
                    : '/assets/icons/iconPasswordHide.svg'
                }
                alt={showPassword ? 'Show Password' : 'Hide Password'}
              />
            </div>
          </div>
          <div className={'__btnSubmit_container'}>
            {formData.password !== '' &&
            formData.email !== ''  ? (
              <button
                className={`login_sectionSubmit_button`}
                type="button"
                onClick={(e) => onSubmit(e)}
              >
                Register
              </button>
            ) : (
              <button
                className={`login_sectionSubmit_disabledButton`}
                disabled
                type="button"
                onClick={(e) => onSubmit(e)}
              >
                Register
              </button>
            )}
          </div>
          {requestAuth.pending && (
              <span className="text-warning">{requestAuth.pending}</span>
            )}
          {requestAuth.success && (
              <span className="text-success">{requestAuth.success}</span>
            )}
          {requestAuth.error && (
              <span className="text-danger">{requestAuth.error}</span>
            )}
        {formData.type !== 'Organization' &&  <div onClick={()=> setformData({...formData, type:"Organization"})  } className="registerLisk" >Register As a Organization </div> }
        {formData.type !== 'User' &&  <div onClick={()=> setformData({...formData, type:"User"})  } className="registerLisk" >Register As a User </div> }
        {formData.type !== 'Validatir' &&  <div onClick={()=> setformData({...formData, type:"Validatir"})  } className="registerLisk" >Register As a Validatir </div> }
       
        </form>
       
      </div>
    </div>
    </div>
  )
}

const mapStateStore = (stateStore) => {
  return {
    user: stateStore.userState.user,
  };
};


export default connect(mapStateStore, { register_user })(Register);