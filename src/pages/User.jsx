import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from "../store/action"

// membuat action async
// bikin reducers
// manggil actionnya (dispatch(action))
// consume datanya

export default function User() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.dataUser)

    useEffect(() => {
        dispatch(getUserData())
    }, []);

    if (loading) {
        return <h1>Loading boss</h1>
    }

    if (error) return <h1>error</h1>

    return (
        <Fragment>
            <h1>Users</h1>
            <div>
                {
                    users.map((user, index) => {
                        return <div key={index}>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>
                    })
                }
            </div>
        </Fragment>
    )
}