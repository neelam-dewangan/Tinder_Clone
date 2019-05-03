export const UserReducer = (postState = { 
    loading: false, 
    posts: null, 
    error: null 
}, action) => {
    switch (action.type) {
        case "POST_LOADING": return {...postState, loading: true}
        case "POST_SUCCESS": return {...postState, loading: false, posts: action.data}
        case "POST_ERROR": return {...postState, loading: false, error: action.err}
        default: return postState;
    }
}
const defaultData = []
export const SelectReducer = (reducerState = defaultData, action) => {
    switch (action.type) {
        case "SECLECTED_PEOPLE": let temp = reducerState;
        temp.push(action.data);
        return temp; 
        default: return reducerState; 
    }

}

export const RejectReducer = (reducerState = defaultData, action) => {
    switch (action.type) {
        case "REJECTED_PEOPLE": let temp = reducerState;
        temp.push(action.data);
        return temp;
        default: return reducerState; 
    }

}