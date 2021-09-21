import { IProfileReducer } from "./types";

export function getProfile(profileObject: IProfileReducer) {
  return { 
    type: 'GET_PROFILE',
    payload: profileObject,
  }
}