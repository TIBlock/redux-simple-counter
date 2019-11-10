const initialState = {
  value: 0,
  color: "black"
};

const reducer = (state = initialState, action) => {
  console.log(action);
  let { type } = action;
  if (type === "INCREMENT") {
    return {
      value: state.value + 1
    };
  } else if (type === "DECREMENT") {
    return {
      value: state.value - 1
    };
   } else if (type === "ADDFIVE") {
    return {
      value: state.value + 5
    };
  } else if (type === "REMOVEFIVE") {
    return {
      value: state.value - 5
    };
  } else if (type === "CHANGECOLOR") {
    return {
      value: state.value,
      color: action.color
    };
  } else if (type === "CUSTOMNUMBER") {
    return {
      value: action.value
    };
  }

  return state;
};
