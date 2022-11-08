import { configureStore } from '@reduxjs/toolkit';
import {  contactReducer } from "./contactsSlice";
import { filter } from "./filterSlice";

export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter, 
    },
}); 