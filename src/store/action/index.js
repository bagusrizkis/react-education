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

// action creator mengembalikan ?
export function getUserData() {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                users = users.map((u) => {
                    return {
                        name: u.name,
                        email: u.email,
                    };
                });
                dispatch({
                    type: "SET_USER",
                    payload: {
                        users: users,
                        loading: false,
                        error: false,
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: true,
                        loading: false,
                    },
                });
            });
    };
}
