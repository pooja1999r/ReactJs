// store configuration in different file and the export this 
import { createStore } from "redux";
import { Reducer ,initialState } from "./reducer";

export const ConfigureStore = () => {
    // create redux store 
    const store = createStore(Reducer , initialState);
    return store;
}