import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    // {
    //     "_id": "5ab12698f36d2879268f293e",
    //     "name": "Incredibles 2",
    //     "language": "ENGLISH",
    //     "type": "Animated",
    //     "rate": 4,
    //     "imageUrl": "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg"
    // }
],
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    putData: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { putData } = eventSlice.actions;

export default eventSlice.reducer;
