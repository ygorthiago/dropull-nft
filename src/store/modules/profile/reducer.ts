import { Reducer } from "redux";
import { IProfileReducer } from "./types";


const INITIAL_STATE: IProfileReducer = {
  profile: {
    collection: {
      banner_image_url: "",
      large_image_url: "",
      image_url: "",
    },
    name: "",
    description: "",
  },
  isLoading: false,
  errorMessage: "",
}

const profile: Reducer<IProfileReducer> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_PROFILE': {
      return action.payload;
    }
    default: {
      return state;
    }
  }

}

export default profile;