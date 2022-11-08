import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

// const initialState = {
//     user: null,
//     isFetching: false,
//     error: false,
// };

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        admin: action.payload,
      };
    case 'LOGOUT':
      return {
        admin: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log('AuthContext State: ', state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
