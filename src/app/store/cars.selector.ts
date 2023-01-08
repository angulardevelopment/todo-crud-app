import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CarState } from "./cars.state";

export const selectCars = createFeatureSelector<CarState>("carDetails");

export const selectCarItems = createSelector(
  selectCars,
    (state: CarState) => state.carItems
  );

  export const selectCarItem = (props: { id: number }) =>
  createSelector(selectCarItems, (carItems) =>
  carItems.find((carItem) => carItem.id === props.id)
  );