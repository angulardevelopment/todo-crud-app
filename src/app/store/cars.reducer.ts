import { Action, createReducer, on } from "@ngrx/store";
import * as CarsActions from "./cars.actions";
import { initialState, CarState } from "./cars.state";

const carsReducer = createReducer(
  initialState,
  on(CarsActions.addCarItemFormSubmitted,
    (state: CarState, {carItem}) =>
      ({...state,
        carItems: [...state.carItems, carItem]
      })),

  on(CarsActions.editCarItemFormSubmitted, (state, { carItem }) => {
    const carItemIndex = state.carItems.findIndex(
      (item) => item.id === carItem.id
    );
    const updatedCarItems = [...state.carItems];
    updatedCarItems[carItemIndex] = carItem;
    return {
      ...state,
      carItems: updatedCarItems,
    };
  }),
  on(CarsActions.deleteCarItemInitiated, (state, { carId }) => {

    const carItemIndex = state.carItems.findIndex(
      (item) => item.id === carId
    );
    const updatedCarItems = [...state.carItems];
    updatedCarItems.splice(carItemIndex, 1);
    return {
      ...state,
      carItems: updatedCarItems,
    };
  })
);

export function reducer(state: CarState | undefined, action: Action) {
  return carsReducer(state, action);
}