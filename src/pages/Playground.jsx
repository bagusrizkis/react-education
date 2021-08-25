import { Fragment } from "react"
import { useDispatch, useSelector, connect } from 'react-redux'
import { decrement, increment } from '../store/action'

const Playground = (props) => {
    console.log(props)
    // const count = useSelector(state => state)

    const dispatch = useDispatch()
    // const addCount = () => {
    //     dispatch(increment(100))
    // }
    const decrementCount = () => {
        dispatch(decrement(50))
    }

    return (
        <Fragment>
            <h1>Dari Playground</h1>
            <hr />
            <button onClick={() => props.increment()}>+</button>
            <h3>{props.count}</h3>
            <button onClick={decrementCount}>-</button>
        </Fragment>
    )
}

// pakai connect untuik mapping state dan dispatch ke prop
// buat combined state
// buat combined dispatch

const mapStateToProps = (state) => {
    return {
        count: state.dataCount.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment(100))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground)
