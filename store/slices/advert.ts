import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Bet {
  article: number;
  url: string;
  image: string;
  image_big: string;
  advert_id: number;
  cpm: number;
  position: number;
  position_on_page: number;
  page: number;
  subject: {
    id: number;
    name: string;
  };
  delivery_time: number;
}

export interface Priority {
  id: number;
  name: string;
  position: number;
}

export interface AdvertState {
  bets: Bet[];
  subject_priorities: Priority[];
}

const initialState: AdvertState = {
  bets: [],
  subject_priorities: [],
};

const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {
    setAdvert(state, action?: PayloadAction<AdvertState>) {
      state.bets = action?.payload?.bets || [];
      state.subject_priorities = action?.payload?.subject_priorities || [];
    },
  },
});

export const { setAdvert } = advertSlice.actions;
export default advertSlice.reducer;
