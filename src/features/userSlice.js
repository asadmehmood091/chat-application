import {createSlice} from "@reduxjs/toolkit";

export const useSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        messages: [],
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const {login, logout, addMessage} = useSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectMessages = (state) => state.user.messages;

export default useSlice.reducer;