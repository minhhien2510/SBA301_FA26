import { createContext, useReducer, useContext } from "react";
import { mockAccounts } from "../stores/authMock";

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(identifier, password) {
    dispatch({ type: "LOGIN_START" });

    return new Promise((resolve) => {
      setTimeout(() => {
        const isEmail = identifier.includes("@");

        const account = mockAccounts.find((acc) =>
          isEmail
            ? acc.email === identifier && acc.password === password
            : acc.username === identifier && acc.password === password
        );

        if (!account) {
          dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
          return resolve({ ok: false });
        }

        if (account.status === "locked") {
          dispatch({ type: "LOGIN_FAILURE", payload: "Account is locked" });
          return resolve({ ok: false });
        }

        if (account.role !== "admin") {
          dispatch({
            type: "LOGIN_FAILURE",
            payload: "Only admin can login",
          });
          return resolve({ ok: false });
        }

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: account,
        });

        resolve({ ok: true });
      }, 1000);
    });
  }

  return (
    <AuthContext.Provider value={{ ...state, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
