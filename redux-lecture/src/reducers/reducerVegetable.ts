import { SELL_VEGETABLE } from "./actionTypes";

interface VegetableState {
  numOfVegetable: number;
}

const initialState: VegetableState = {
  numOfVegetable: 0
}


interface VegetableAction {
  type: string;
}

const reducerVegetable = (state: VegetableState=initialState, action: VegetableAction) => {
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
