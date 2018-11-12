import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['geolocation'], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
