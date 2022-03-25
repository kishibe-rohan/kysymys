import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
