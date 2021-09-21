import { IUserData } from "../../../models/types";

export interface IProfileReducer {
  profile: IUserData,
  isLoading?: boolean,
  errorMessage?: string,
}
