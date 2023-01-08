import { createAction, props } from "@ngrx/store";
import { CarItem } from "../models/car";

export const appLoaded = createAction("[App] App Loaded");


  

export const addCarItemFormSubmitted = createAction(
  "[Add car Page] Add car Item Form Submitted",
  props<{ carItem: CarItem }>()
);


export const editCarItemFormSubmitted = createAction(
  "[Edit car Page] Edit car Item Form Submitted",
  props<{ carItem: CarItem }>()
);

export const deleteCarItemInitiated = createAction(
  "[Delete car Page] Delete car Item Initiated",
  props<{ carId: number }>()
);

