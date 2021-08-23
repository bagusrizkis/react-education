import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <span className={classes.item}>
                <Link className={classes.link} to="/">Home</Link>
            </span>
            <span className={classes.item}>
                <Link className={classes.link} to="/user">User</Link>
            </span>
            <span className={classes.item}>
                <Link className={classes.link} to="/about">About</Link>
            </span>
            <span className={classes.item}>
                <Link className={classes.link} to="/play">Play</Link>
            </span>
        </nav>
    )
}
