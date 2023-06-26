
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    topic: null
}

export const genre = createSlice({
    name: 'genre',
    initialState,
    reducers:{
        setGenre: (state, action)=>{
            return {
                topic: action.payload
            }
        },
    }
})

export const {setGenre, getGenre} = genre.actions;
export default genre.reducer;