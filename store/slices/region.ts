import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Region {
  id: number;
  name: string;
}

export interface RegionState {
  regions: Region[];
}

const initialState: RegionState = {
  regions: [],
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegions(state, action?: PayloadAction<Array<Region>>) {
      state.regions = action?.payload || [];
    },
  },
});

export const { setRegions } = regionSlice.actions;
export default regionSlice.reducer;
