import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    TOGGLE_AUTH_USER,
  } from '../types/user';
  
  const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
  };
  
  const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_USER:
        const register_user = JSON.stringify(payload);
        localStorage.setItem('user', register_user);
        return { ...state, user: payload };
      case LOGIN_USER:
        const logun_user = JSON.stringify(payload);
        localStorage.setItem('user', logun_user);
        return { ...state, user: payload };
      case LOGOUT_USER:
        localStorage.removeItem('user');
        return { ...state, user: payload };
      case TOGGLE_AUTH_USER:
        return { ...state, toggleAuthUser: !state.toggleAuthUser };
      default:
        return state;
    }
  };
  
  export default userReducer;
  