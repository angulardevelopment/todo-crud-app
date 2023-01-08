import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as CarsReducer from "../store/cars.reducer";

export const reducers: ActionReducerMap<State> = {
  carDetails: CarsReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];