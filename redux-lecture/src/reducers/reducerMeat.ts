import { SELL_MEAT } from "./actionTypes";

export interface MeatState {
  numOfMeat: number;
}

const initialState: MeatState = {
  numOfMeat: 0
}

interface MeatAction {
  type: string;
}

const reducerMeat = (state: MeatState = initialState, action: MeatAction) => {
  switch (action.type) {
    case SELL_MEAT:
      return {
        ...state,
        numOfMeat: state.numOfMeat - 1,
      };
    default:
      return state;
  }
};

export default reducerMeat;
