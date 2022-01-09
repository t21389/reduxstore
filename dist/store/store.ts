import { configureStore } from "@reduxjs/toolkit";
import reducer from "./../reducer/reducer";

/**middleware is hidden there in toolkit :)*/
export const store = configureStore({ reducer });
export type TStore = ReturnType<typeof store.getState>;
