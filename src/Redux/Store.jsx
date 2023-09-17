import { configureStore } from '@reduxjs/toolkit'
import eventSlice from './EventSlice'
import latestMoviesSlice from "./LatestMovies"
import upcomingMovieSlice from "./UpcomingMovies"

export const store = configureStore({
  reducer: {
    events: eventSlice,
    latestMovies: latestMoviesSlice,
    upcomingMovies: upcomingMovieSlice,
  },
})