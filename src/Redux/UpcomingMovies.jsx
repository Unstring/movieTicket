import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    // {
    //   _id: "5ab4e66b0c1d2b27846c6407",
    //   name: "Black Friday",
    //   language: "ENGLISH",
    //   rate: 4.5,
    //   type: "Action Adventure Fantasy",
    //   imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
    // }
  ],
};

export const upcomingMovieSlice = createSlice({
  name: "upcomingMovies",
  initialState,
  reducers: {
    putData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { putData } = upcomingMovieSlice.actions;

export default upcomingMovieSlice.reducer;
