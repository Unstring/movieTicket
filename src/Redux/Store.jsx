import { configureStore } from '@reduxjs/toolkit'
import eventSlice from './EventSlice'

export const store = configureStore({
  reducer: {
    events: eventSlice,
  },
})