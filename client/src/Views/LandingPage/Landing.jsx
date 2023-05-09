import style from '../LandingPage/Landing.module.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    
    return (
        <div className={style.container}>
            <div className={style.boxButton}>
                <h3 className={style.txt1}>I'm The KING!</h3>
                <NavLink to='/home'><button className={style.button}>Click</button></NavLink>
                <h1 className={style.txt}>VIDEOGAMES PI by Tony Teyer</h1>
            </div>
        </div>
    )
}

export default Landing