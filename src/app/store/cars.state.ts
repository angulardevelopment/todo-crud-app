import { CarItem } from "../models/car";

export interface CarState {
  carItems: CarItem[];
}

export const initialState: CarState = {
  carItems: [],
};