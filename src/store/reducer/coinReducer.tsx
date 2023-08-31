import { PayloadAction } from "@reduxjs/toolkit";

const defaultState = {
  coin: "bitcoin",
};

const ADD_SEARCH = "ADD_SEARCH";

export const coinReducer = (
  state = defaultState,
  action: PayloadAction<string>
) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, coin: action.payload };

    default:
      return state;
  }
};

export const addSearch = (payload: string) => ({
  type: ADD_SEARCH,
  payload,
});
