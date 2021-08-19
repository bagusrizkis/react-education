import { Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    return <Route {...rest} render={() => {
        if (localStorage.getItem("access_token")) {
            return children
        } else {
            // redirect
            return <h1>Login dulu kuy</h1>
        }
    }} />
}

export default PrivateRoute