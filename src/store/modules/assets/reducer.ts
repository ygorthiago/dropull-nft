import { Reducer } from "redux";
import { IAssetReducer } from "./types";

const INITIAL_STATE: IAssetReducer = {
  assetsList: [],
  isLoading: false,
}

const assets: Reducer<IAssetReducer> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ASSETS': {
      const { assetsList, isLoading } = action.payload
      return { assetsList, isLoading };
    }
    default: {
      return state;
    }
  }

}

export default assets;