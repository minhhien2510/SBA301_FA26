export const initialFormState = {
  identifier: "",
  password: "",
  errors: {},
};

export function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "VALIDATE_FIELD": {
      const errors = { ...state.errors };
      if (action.field === "identifier") {
        if (!action.value) {
          errors.identifier = "Required";
        } else if (action.value.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(action.value)) {
          errors.identifier = "Invalid email format";
        } else {
          delete errors.identifier;
        }
      }
      if (action.field === "password") {
        if (!action.value) {
          errors.password = "Required";
        } else {
          delete errors.password;
        }
      }
      return { ...state, errors };
    }
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
}