const initialState = {
  uid: null,
  name: "",
  email: "",
  photoURL: "",
  Card: {
    id: null,
    balance: null,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
