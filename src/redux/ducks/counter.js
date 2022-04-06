const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = { count: 100 };

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

const counterReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case INCREMENT:
      newState.count += 1;
      break;
    case DECREMENT:
      newState.count -= 1;
      break;
    default:
      break;
  }
  return newState;
};

export default counterReducer;
