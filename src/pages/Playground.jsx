import { Fragment, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

const Playground = () => {
    // buat state count isinya number dari 0
    const [number, setNumber] = useState(0)
    const history = useHistory()

    useEffect(() => {
        if (number === 5) {
            // push ke home
            history.push('/')
        }
    }, [number]);

    return (
        <Fragment>
            <h1>Dari Playground</h1>
            <hr />
            <button onClick={() => setNumber(number + 1)}>Click me until 5: {number}</button>
        </Fragment>
    )
}

export default Playground