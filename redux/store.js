import { configureStore } from "@reduxjs/toolkit";
import genreReducer from './features/genre-slice';

export const store = configureStore({
    reducer:{
        genre:genreReducer,
    }
});