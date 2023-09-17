import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    // {
    //     "_id": "5ab12666f36d2879268f2902",
    //     "name": "Death Wish",
    //     "language": "ENGLISH",
    //     "type": "Action Crime Thriller",
    //     "rate": 3.2,
    //     "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    // }
],
};

export const latestMoviesSlice = createSlice({
  name: "latestMovies",
  initialState,
  reducers: {
    putData: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { putData } = latestMoviesSlice.actions;

export default latestMoviesSlice.reducer;
