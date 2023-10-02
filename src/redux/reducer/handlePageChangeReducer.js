const pageInitialState = 1;
const visibleFrom = 0;
const visibleTo = 6;

const initialState = {
  pageInitialState,
  visibleFrom,
  visibleTo,
};

const handlePageChange = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PAGE_STATUS":
      state = { ...state, pageInitialState: action.payload };
      break;
    case "UPDATE_VISIBLE_FROM":
      state = { ...state, visibleFrom: action.payload };
      break;
    case "UPDATE_VISIBLE_TO":
      state = { ...state, visibleTo: action.payload };
      break;
    default:
      return state;
  }
  return state;
};

export default handlePageChange;
