import style from './Card.module.css'
import { NavLink } from 'react-router-dom' //componenete de react router dom
import star from '../../img/star.png'
const Card = ({ id, name, image, genres, rating }) => {

    return (
        <div key={id} className={style.container}>
            <div className={style.containerStar}>
                <h2 className={style.rating}>{rating}</h2>
                <img className={style.star} src={star} alt='rating' />
            </div>
            <NavLink to={`/detail/${id}`}>
                <img className={style.image} src={image} alt={name} />
                <h2 className={style.txt}>Name:</h2>
                <h2 className={style.name}>{name}</h2>
                <h2 className={style.txt}>Genres:</h2>
                <div className={style.genresContainer}>
                    {
                        genres?.map((genre, index) => {
                            return <h4 key={index} className={style.genres}>{genre}</h4>
                        })
                    }
                </div>
            </NavLink>
        </div>
    )
}

export default Card