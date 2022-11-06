import {REGISTER_USER,LOGIN_USER,LOGOUT_USER,TOGGLE_AUTH_USER} from "../types/user"



export const log_in =(user) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
      
        Dispatch({type:LOGIN_USER,payload:user})
        return user
    }catch(err){
        if (err.response && err.response.data) {
            Dispatch({type:TOGGLE_AUTH_USER})
            console.log(err)
          }
          throw err
          
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const register_user =(user) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
    
        Dispatch({type:REGISTER_USER,payload:user})
        return user
    }catch(err){
        if (err.response && err.response.data) {
            Dispatch({type:TOGGLE_AUTH_USER})
            console.log(err)
          }
          throw err
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const log_out =(token) => async Dispatch =>{
    // const user1 = JSON.parse(localStorage.getItem("user"))
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        // const {data} = await axios.delete(SERVER_URL+"/logout",{headers: {"Authorization": token}})
        // console.log(data.data)
        Dispatch({type:LOGOUT_USER,payload:null})
        return 'l'
    }catch(err){
        if (err.response && err.response.data) {
            Dispatch({type:LOGOUT_USER,payload:null}) // some reason error message
            console.log(err)
          }
          throw err
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

