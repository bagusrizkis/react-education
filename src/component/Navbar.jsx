import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <ThemeContext.Consumer>
            {
                ({ onSetTheme, theme }) => {
                    return <nav className={classes.navbar} style={{ backgroundColor: theme }}>
                        <div className={classes.navbar}>
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

                            <span className={classes.item}>
                                <button className={classes.link} onClick={() => onSetTheme('white')}>Light</button>
                                <button className={classes.link} onClick={() => onSetTheme('black')}>Dark</button>
                            </span>
                        </div>
                    </nav>
                }
            }
        </ThemeContext.Consumer>
    )
}
