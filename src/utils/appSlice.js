import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toogleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { toogleMenu } = appSlice.actions;
export default appSlice.reducer;