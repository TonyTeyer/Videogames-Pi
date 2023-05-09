/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getGameById } from "../../redux/actions"
import style from './Details.module.css'

const Details = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    // cada vez que el id cambie se cambia el estado global de detail
    useEffect(() => {
        dispatch(getGameById(id));
    }, [id]);
    const gameDetail = useSelector(state => state.gameDetail);
    
    return (
        <div className={style.container}>
            <div className={style.containerDetail}>
                
                <div className={style.contLoading}>
                    {typeof gameDetail[0] === 'undefined'
                        ? <h1 className={style.loading}>WAITING...</h1>
                        : gameDetail[0].id != id && <h1 className={style.loading}>LOADING...</h1>}
                </div>

                {
                    gameDetail.map(games => {
                        return gameDetail[0].id == id && (
                            <div className={style.detail}>
                                <div className={style.imagen}>
                                    <img className={style.image} src={games.background_image} alt={games.name} />
                                </div>
                                <div className={style.informacion}>
                                    <h3 className={style.name}>{games.name}</h3>
                                    {
                                        games.description ? (
                                            <p
                                                className={style.info}
                                                dangerouslySetInnerHTML={{ __html: games.description }}//el metodo dangerouslySetInnerHTML es para establecer contenido HTML dentro de una etiqueta p
                                            ></p>
                                        ) : (
                                            <p>"Game detail not found in database"</p>//y si el games.description viene null o undefined nos tira el mssge
                                        )}
                                    <p className={style.info}><b>Platforms: </b>
                                        {
                                            games.platform.map(plataforma => {
                                                return <span>{plataforma}/ </span>
                                            })
                                        }</p>
                                    <p className={style.info}><b>Genres: </b>
                                        {
                                            games.genres.map(genre => {
                                                return <span>{genre}/</span>
                                            })
                                        }
                                    </p>
                                    <p className={style.info}><b>Released:</b> {games.released}</p>
                                    <p className={style.info}><b>Rating:</b> {games.rating}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Details;