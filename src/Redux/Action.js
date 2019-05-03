import axios from 'axios';

 const postLoading = () => {
     return {
         type: "POST_LOADING"
     }
 } 
 const postSuccess = (data) => {
    return {
        type: "POST_SUCCESS",
        data: data
    }
} 
const postError = (err) => {
    return {
        type: "POST_ERROR",
        err: err
    }
} 

export const getPostThunk = () => {
    return (dispatch) => {
        dispatch(postLoading())
        axios.get('https://randomuser.me/Api')
        .then((response) => {
            dispatch(postSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postError(err))
        })
    }
}

export const SelectReducer = (data) => {
    return {
        type: "SECLECTED_PEOPLE",
        data: data
    }
}

export const RejectReducer = (data) => {
    return {
        type: "REJECTED_PEOPLE",
        data: data
    }
}

