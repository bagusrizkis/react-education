import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Home() {
    const state = useSelector(state => state)
    // const count = useSelector(state => state.count)

    return (
        <Fragment>
            {/* <h1>Count: {count} </h1> */}
            <h1></h1>
            <pre>
                {
                    JSON.stringify(state, null, 4)
                }
            </pre>
        </Fragment>
    )
}