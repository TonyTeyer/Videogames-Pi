import Card from "../Card/Card";
import { useEffect, useState } from "react";
import {  useSelector } from 'react-redux';
import style from './Cards.module.css'
import Pagination from "../Pagination/Pagination";

const Cards = () => {

    const allGames = useSelector(state => state.allGames)
    const [currentPage, setCurrentPage] = useState(1) 
    const [gamesPerPage] = useState(15)//declaramos el estado inicial de gamesPerPage y establecemos su valor en 15
    const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage// 15 - 15 = 0
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame) //0, 15
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }//la función paginado() actualiza la página actual de la paginación, lo que a su vez actualiza la lista de juegos que se muestran en la interfaz.

    // solo para saber la cantidad de paginas (en este caso son 10)
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(allGames.length / gamesPerPage); i++) {
        pageNumbers.push(i)
    };
    // handler para las flechas de prev y next
    const clickHandler = (event) => {
        if (event.target.name === 'prev') {
            if (currentPage - 1 === 0) return
            setCurrentPage(currentPage - 1)
        }
        else {
            if (currentPage === pageNumbers.length) return
            setCurrentPage(currentPage + 1)
        };
    };
    useEffect(() => { 
        setCurrentPage(1)
    }, [allGames]);

    return (
        <div className={style.container}>
            <div className={style.containerButtons}>
                {currentGames.length !== 0 && <button className={style.buttons} name="prev" onClick={clickHandler}>&lt;&lt;</button>}
                <Pagination
                    gamesPerPage={gamesPerPage}
                    allGames={allGames.length}
                    paginado={paginado}
                    currentPage={currentPage}
                />
                {currentGames.length !== 0 && <button className={style.buttons} name="next" onClick={clickHandler}>&gt;&gt;</button>}
                {currentGames.length === 0 && <div className={style.ningunJuego}>Sorry, no games were found</div>}
            </div>
            <div className={style.cardsContainer}>
                {
                    currentGames.map((game, index) => {
                        return (
                            <div className={style.cards} key={index}>
                                <Card
                                    id={game.id}
                                    name={game.name}
                                    image={game.background_image}
                                    genres={game.genres}
                                    rating={game.rating}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards