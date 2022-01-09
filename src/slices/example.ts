import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  obj: any;
};

const initialState = {
  obj: {
    name: "Hiten",
    surname: "Patel",
  },
};

const exampleSlice = createSlice({
  name: "obj",
  initialState: initialState,
  reducers: {
    changeObj: (state, { payload }: PayloadAction<TPayload>) => {
      state.obj = payload.obj;
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const { changeObj } = exampleSlice.actions;
