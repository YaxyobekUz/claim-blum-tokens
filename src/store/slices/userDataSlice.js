import { createSlice } from "@reduxjs/toolkit";

const savedUserData = JSON.parse(localStorage.getItem("user-data"));
const userInitialData = {
  info: { name: "Foydalanuvchi", gender: "Erkak" },
  balance: {
    amount: 0,
    history: [],
  },
};

export const userDataSlice = createSlice({
  name: "user-data",
  initialState: savedUserData ? savedUserData : userInitialData,
  reducers: {
    updateUserInfo: (state, action) => {
      const userFullData = {
        info: action.payload,
        balance: state.balance,
      };

      state.info = action.payload;

      // save user data to local storage
      localStorage.setItem("user-data", JSON.stringify(userFullData));
    },

    updateUserBalanceHistory: (state, action) => {
      const data = action.payload;
      const newBalanceHistoryData = [data, ...state.balance.history];
      const oldBalanceHistoryDataLength = state.balance.history.length;

      const newBalance = {
        amount: state.balance.amount + data.amount,
        history:
          oldBalanceHistoryDataLength >= 100
            ? newBalanceHistoryData.slice(0, 100)
            : newBalanceHistoryData,
      };

      const userFullData = {
        info: state.info,
        balance: newBalance,
      };

      state.balance = newBalance;

      // save user data to local storage
      localStorage.setItem("user-data", JSON.stringify(userFullData));
    },
  },
});

export const { updateUserInfo, updateUserBalanceHistory } =
  userDataSlice.actions;

export default userDataSlice.reducer;
