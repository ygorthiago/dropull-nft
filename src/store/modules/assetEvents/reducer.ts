import { Reducer } from "redux";
import { IEventsHistory } from "../../../models/types";

const INITIAL_STATE: IEventsHistory = {
  asset_events: []
}

const assetEvents: Reducer<IEventsHistory> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ASSET_EVENTS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }

}

export default assetEvents;