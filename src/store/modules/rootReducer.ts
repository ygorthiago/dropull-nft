import { combineReducers } from "redux";
import assets from './assets/reducer'
import profile from './profile/reducer'
import assetEvents from './assetEvents/reducer'

export default combineReducers({
  assets,
  profile,
  assetEvents
})