export const updatePageState = (value) => {
  return {
    type: "UPDATE_PAGE_STATUS",
    payload: value,
  };
};

export const updateVisibleTo = (value) => {
  return {
    type: "UPDATE_VISIBLE_TO",
    payload: value,
  };
};

export const updateVisibleFrom = (value) => {
  return {
    type: "UPDATE_VISIBLE_FROM",
    payload: value,
  };
};
