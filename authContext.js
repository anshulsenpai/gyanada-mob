import React, { createContext, useReducer, useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

const initalState = { token: null };

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const token = action.payload;
      SecureStore.setItemAsync("token", token);
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      SecureStore.deleteItemAsync("token");
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initalState); // Initial state without async

  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync("token");
      dispatch({ type: "LOGIN", payload: token });
    }

    fetchToken();
  }, []); // Fetch token on component mount

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
