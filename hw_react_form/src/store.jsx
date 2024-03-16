import { configureStore } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import SinhVienReducer from "./redux/reducers/SinhVienReducer";

export const store = configureStore({
  //quản lý store của toàn bộ ứng dụng
  reducer: {
    // product: productReducer,
    number: 10,
    SinhVienReducer: SinhVienReducer,
  },
});
