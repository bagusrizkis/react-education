import { INCREMENT } from "../actionType";

export function increment(num) {
    return {
        type: INCREMENT,
        payload: num,
    };
}

export function decrement(num) {
    // logic complex
    return {
        type: "DECREMENT",
        payload: num, // hasil olahan diatasnya
    };
}
