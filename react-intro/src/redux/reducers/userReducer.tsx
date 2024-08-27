import { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_RESET } from "../constants/userConstant"
export const userReducerSignup = (state = {}, action: { type: string; payload: unknown; }) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true };
        case USER_SIGNUP_SUCCESS:
            return { loading: false, userSignUp: action.payload };
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNUP_RESET:
            return {};
        default:
            return state;
    }
}