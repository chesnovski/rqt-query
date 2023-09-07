import { PayloadAction } from "@reduxjs/toolkit";

const defaultState = {
  page: 0,
};

const INCREASE_PAGE = "INCREASE_PAGE";
const DECREASE_PAGE = "DECREASE_PAGE";

export const pageReducer = (
  state = defaultState,
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case INCREASE_PAGE:
      return { ...state, page: state.page + 10 };

    case DECREASE_PAGE:
      return { ...state, page: state.page - 10 };

    default:
      return state;
  }
};

export const IncreasePageAction = () => ({
  type: INCREASE_PAGE,
});
export const DecreasePageAction = () => ({
  type: DECREASE_PAGE,
});
