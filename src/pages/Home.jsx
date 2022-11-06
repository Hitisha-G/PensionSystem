import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/home.css';
import pension from "../pension"
const Home = (props) => {
  const user = props.user;
  const mHistory = useNavigate();
  const token = JSON.parse(localStorage.getItem('user'));

  const [formData, setformData] = useState({
    name: "",
    email: "",
    EAddress: "",
    password: "",
    number: "",
    aadhar: "",
    type:"user"
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

  useEffect(() => {
    getAddress()
  }, [])

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

  console.log(token);
  useEffect(() => {
    if (!user || user === null) {
      return mHistory('/register');
    }
    if (!token) return mHistory('/register');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  
  return (
    <div className="paddingTop">
      <div className="container">
        <div className="">
         {formData.type === "Organization" && <div className="__items__container w-100">
            <table id="customers">
              <tr>
                <th>User Name</th>
                <th>number </th>
                <th>Address</th>
                <th>Total Amount</th>
                <th> </th>
                <th></th>
              </tr>
              <tr>
                <td>team </td>
                <td>74185292</td>
                <td>AlfredsFutterkiste</td>
                <td>45682</td>
                <td>
                  <button className="btnA">Accept</button>
                </td>
                <td>
                  <button className="btnR">Reject</button>
                </td>
              </tr>
            </table>
          </div>}
         { formData.type === "user" &&  <div  className="form_container " >
            <h2>Apply for Organization</h2>
            <form action="" className='formContainer col-12 row'>
            <div className="form-group text-left  col-12 col-lg-6" style={{ textAlign: 'left' }}>
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
            <div className="form-group text-left col-12 col-lg-6" style={{ textAlign: 'left' }}>
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
            <div className="form-group text-left col-12 col-lg-6" style={{ textAlign: 'left' }}>
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
          <div className={'_input_container col-12 col-lg-5'}>
                <label className={'_label'}>Select District </label>
                <select
                  className={'_input'}
                  style={{ cursor: 'pointer' }}
                  id="year"
                  name="year"
                  disabled={formData.state_id?.length === 1 || formData.year !== "2021-2022" ? false : true}
                  value={formData.district_id}
                  onChange={(t) => {
                    setformData({
                      ...formData,
                      district_id: t.target.value,
                      districtName: t.target.selectedOptions[0].text,
                    });
                  }}
                >
                  <option value="" selected >
                    All District
                  </option>
                  {/* {districtList.map((item) => ( */}
                    <option id={"orgName"} value={"org Name"}>{"org Name"}</option>
                    <option id={"orgName"} value={"org Name"}>{"org Name"}</option>
                    <option id={"orgName"} value={"org Name"}>{"org Name"}</option>
                    <option id={"orgName"} value={"org Name"}>{"org Name"}</option>
                  {/* ))} */}
                </select>
                {/* {formDataError.year && (
                <span className="text-danger">{formDataError.year}</span>
              )} */}
              </div>
              
              <div className='w-100  text-right'>
                <button className='userSubmit'> submit </button>
              </div>
            </form>
          </div>}
        </div>
      </div>
    </div>
  );
};

const mapStateStore = (stateStore) => {
  return {
    user: stateStore.userState.user,
  };
};

export default connect(mapStateStore, {})(Home);
