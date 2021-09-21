import { IEventsHistory } from "../../../models/types";

export function getAssetEvents(assetEventsObject: IEventsHistory) {  
  return { 
    type: 'GET_ASSET_EVENTS',
    payload: assetEventsObject,
  }
}