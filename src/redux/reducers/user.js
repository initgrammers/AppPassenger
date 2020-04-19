const initialState = {
  uid: null,
  displayName: "",
  email: "",
  photoURL: "",
  card: {
    id: null,
    balance: null,
  },
};

const user = (state = initialState, action) => {
  console.log(action);
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
