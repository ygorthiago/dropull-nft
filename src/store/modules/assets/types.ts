import {  IAssets } from "../../../models/types";

export interface IAssetReducer {
  assetsList: IAssets[],
  isLoading: boolean,
}