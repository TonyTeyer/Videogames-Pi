import Cards from "../../components/Cards/Cards"
import FilterButtons from "../../components/FilterButtons/FilterButtons"
import style from './Home.module.css'

const Home = () => {

    return (
        <div className={style.container}>
            <div className={style.ordering}>
                <h2 className={style.h2}>Filter by:</h2>
                <h2 className={style.h2}>Order by:</h2>
            </div>
            <FilterButtons />
            <Cards />
        </div>
    )
};

export default Home;