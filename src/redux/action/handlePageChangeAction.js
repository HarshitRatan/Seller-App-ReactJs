export const updatePageState = (value) => {
  return {
    type: "UPDATE_PAGE_STATUS",
    payload: value,
  };
};
