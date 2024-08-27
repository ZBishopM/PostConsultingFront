import { toast } from "react-toastify"
import axios from "axios";
import { USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstant"
export const userSignUpAction = (user: any)=> async (dispatch: any) => {
    dispatch({ type: USER_SIGNUP_REQUEST })
    try {
        const {data} = await axios.post('/api/users',user)
        localStorage.setItem('userInfo',JSON.stringify(data))
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        })
        toast.success("Register Successfully")
    } catch (error: any) {
        dispatch({ 
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error 
        })
        toast.error(error.response.data.error)
    }
}