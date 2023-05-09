import { getGameByName } from '../../redux/actions'
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar() {

    const [games, setGame] = useState('')

    const onChangeHandler = (event) => {
        setGame(event.target.value) 
    }

    const functions = () => {
        dispatch(getGameByName(games))
        setGame('')
    }


    const dispatch = useDispatch()

    return (
        <div className={style.container}>
            <input autoComplete='off' className={style.input} onChange={onChangeHandler} type="search" placeholder="Videogame Name" name="name" value={games} />
            <button className={style.buttons} onClick={() => functions()}>Search</button>
        </div>
    )
}