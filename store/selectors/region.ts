import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RegionState } from "../slices/region";

const regionState = (state: RootState): RegionState => state.region;

export const selectRegions = createSelector(
  regionState,
  (state: RegionState) => {
    return state.regions;
  }
);
