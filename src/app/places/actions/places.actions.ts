import { Action } from '@ngrx/store';

export enum PlacesActionTypes {
  LoadPlacess = '[Places] Load Placess'
}

export class LoadPlacess implements Action {
  readonly type = PlacesActionTypes.LoadPlacess;
}

export type PlacesActions = LoadPlacess;
