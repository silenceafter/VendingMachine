const initialState = {
    admin: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).admin : false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':        
        const loginData = { admin: action.payload.admin };
        localStorage.setItem('auth', JSON.stringify(loginData));
        return {
          ...state,
          ...loginData,
        };

      case 'LOGOUT':
        localStorage.removeItem('auth');
        return {
          ...state,
          ...{
            admin: false,
          },
        };

      default:
        return state;
    }
  };
  
  export default authReducer;