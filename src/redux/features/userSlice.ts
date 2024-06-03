import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  email: string;
  phone: string;
  role: string;
};

type User = {
  user: TUser | null;
};

const userInitialState:User = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
  },
});

export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
