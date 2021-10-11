const Increment = (state = 0, action) => {
  switch (action.type) {
    case "Incre":
      return state + 1;
    default:
      return state;
  }
};
export default Increment;
