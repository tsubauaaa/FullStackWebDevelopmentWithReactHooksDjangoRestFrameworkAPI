import { SELL_VEGETABLE } from "./actionTypes";

export interface VegetableState {
  numOfVegetable: number;
}

interface VegetableAction {
  type: string;
}

const reducerVegetable = (state: VegetableState, action: VegetableAction) => {
  switch (action.type) {
    case SELL_VEGETABLE:
      return {
        ...state,
        numOfVegetable: state.numOfVegetable - 1,
      };
    default:
      return state;
  }
};

export default reducerVegetable;
