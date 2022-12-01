import { combineReducers } from "redux"

const navReducer = (selectedPage = null, action) => {
    if(action.type === "PAGE_SELECTED") {
        return action.payload;
    }

    return selectedPage;
}

export default combineReducers({
    selectedPage: navReducer,
})