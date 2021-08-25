import { Fragment } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from '../App'

export default function Home() {
    const state = useSelector(state => state)
    // const count = useSelector(state => state.count)

    return (
        <Fragment>
            <h1>Context:</h1>
            <ThemeContext.Consumer>
                {
                    (value) => {
                        return (
                            <pre>
                                {
                                    JSON.stringify(value, null, 4)
                                }
                            </pre>
                        )
                    }
                }
            </ThemeContext.Consumer>

            <h1>Redux State: </h1>
            <pre>
                {
                    JSON.stringify(state, null, 4)
                }
            </pre>
        </Fragment>
    )
}