import { IAssetReducer } from "./types";

export function getAssets(assetObject: IAssetReducer) {
  return { 
    type: 'GET_ASSETS',
    payload: assetObject,
  }
}