import { useState } from "react";
import Homepage from "./pages/Homepage.jsx";

/**
 * {}
 * bisa ngebalikin JSX atau string
 */

function App() {
    const [show, setShow] = useState(true);

    function ShowHide() {
        if (show) return <Homepage />;
        return <h4>Ini terhidden</h4>;
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
            {/* {(() => {
            if () { return ""}
            }
            )()} */}
            {ShowHide()}
            {/* {show ? <Homepage /> : <h4>Ini terhidden</h4>} */}
        </div>
    );
}

export default App;
