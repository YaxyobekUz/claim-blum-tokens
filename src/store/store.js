import { configureStore } from "@reduxjs/toolkit";

// slices
import userDataSlice from "./slices/userDataSlice";

export default configureStore({
  reducer: {
    userData: userDataSlice,
  },
});
