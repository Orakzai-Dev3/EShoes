
import { createSlice } from '@reduxjs/toolkit'
const likedSlice = createSlice({

    name: 'liked',
    initialState: {
        liked: []
    },


    reducers: {
        addLiked: (state, action) => {
            state.liked.push(action.payload)
        },
        removeLiked: (state, action) => {
            state.liked = state.liked.filter(item => item.image !== action.payload.image)
        },
    }
})
export const {addLiked,removeLiked} = likedSlice.actions

export default likedSlice.reducer
