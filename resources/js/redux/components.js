import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
    name: 'components',

    initialState: {
        isSidebarOpen: false,
        isPasswordDisplayed: false,
        isLoading: false
    },

    reducers: {
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        },

        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },

        displayPassword: (state) => {
            state.isPasswordDisplayed = true;
        },

        hidePassword: (state) => {
            state.isPasswordDisplayed = false;
        },

        startLoading: (state) => {
            state.isLoading = true;
        },

        stopLoading: (state) => {
            state.isLoading = false;
        }
    }
});

export const { openSidebar, closeSidebar, displayPassword, hidePassword, startLoading, stopLoading } = componentsSlice.actions;
