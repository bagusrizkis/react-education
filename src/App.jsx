import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./component/Navbar";
import User from "./pages/User";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import React, { useState } from 'react'

export const ThemeContext = React.createContext({})

function App() {
    const [theme, setTheme] = useState('white')

    return (
        <div className="App">
            <ThemeContext.Provider value={{ theme: theme, onSetTheme: (newTheme) => setTheme(newTheme) }} >
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path='/user' children={<User />} />
                        <Route exact path="/play" children={<Playground />} />
                        <Route exact path="/" children={<Home />} />
                        <Route path='*'><h1>404 Not Found</h1></Route>
                    </Switch>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div >
    )
}

export default App
