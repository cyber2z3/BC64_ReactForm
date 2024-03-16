import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSV: [
    {
      id: 1,
      name: "Duc",
      phone: "0399350341",
      email: "ititiu21181@gmail.com",
    },
    {
      id: 2,
      name: "Truc",
      phone: "012345678",
      email: "ititiu21182@gmail.com",
    },
  ],
  svEdit: {
    id: 1,
    name: "Duc",
    phone: "0399350341",
    mail: "ititiu21181@gmail.com",
  },
};

const SinhVienReducer = createSlice({
  name: "SinhVienReducer",
  initialState,
  reducers: {
    addSvAction: (state, action) => {
      state.arrSV.push(action.payload);
    },
    deleteSvAction: (state, action) => {
      state.arrSV = state.arrSV.filter((sv) => sv.id !== action.payload);
    },
    updateSvAction: (state, action) => {
      state.arrSV.map((index) => {
        if (index.id === action.payload.id) {
          index.name = action.payload.name;
          index.phone = action.payload.phone;
          index.mail = action.payload.mail;
        }
      });
    },
  },
});

export const { addSvAction, deleteSvAction, updateSvAction } =
  SinhVienReducer.actions;

export default SinhVienReducer.reducer;
