import { Fragment, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/action'

const Playground = () => {
    /**
     * - Ngubah state count (increment, dec)
     * - buat Dispatch sebuah action
     * - buat action (action function) type: ""
     * - buat action Type
     * - buat reducers
     */
    const count = useSelector(state => state.count)

    const dispatch = useDispatch()

    const addCount = () => {
        dispatch(increment(100))
    }

    const decrementCount = () => {
        dispatch(decrement(50))
    }

    return (
        <Fragment>
            <h1>Dari Playground</h1>
            <hr />
            <button onClick={addCount}>+</button>
            <h3>{count}</h3>
            <button onClick={decrementCount}>-</button>
        </Fragment>
    )
}

export default Playground