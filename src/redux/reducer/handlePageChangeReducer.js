const pageInitialState = 1;

const handlePageChange = (state = pageInitialState, action) => {
  switch (action.type) {
    case "UPDATE_PAGE_STATUS":
      state = action.payload;
      break;
    default:
      return state;
  }
  return state;
};

export default handlePageChange;
