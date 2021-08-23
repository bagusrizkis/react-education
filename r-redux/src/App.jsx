import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./component/Navbar";
import DetailUser from "./pages/Detail";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/user'>
                        <h1>From User</h1>
                        <Switch>
                            <PrivateRoute exact path='/user/:userId' children={<DetailUser />}>
                            </PrivateRoute>
                        </Switch>
                    </Route>
                    <PrivateRoute exact path="/play" children={<Playground />} >
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path='*'>
                        <h1>404 Not Found</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div >
    )
}

export default App
