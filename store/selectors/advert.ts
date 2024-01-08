import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AdvertState } from "../slices/advert";

const advertState = (state: RootState): AdvertState => state.advert;

export const selectBets = createSelector(advertState, (state: AdvertState) => {
  return state.bets;
});

export const selectSubjectPriorities = createSelector(
  advertState,
  (state: AdvertState) => {
    return state.subject_priorities;
  }
);
