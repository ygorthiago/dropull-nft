import { createStore } from 'redux';
import { IEventsHistory } from '../models/types';
import { IAssetReducer } from './modules/assets/types';
import { IProfileReducer } from './modules/profile/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  assets: IAssetReducer
  profile: IProfileReducer
  assetEvents: IEventsHistory
}

const store = createStore(rootReducer)

export default store;