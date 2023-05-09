import FormCreate from "../../components/FormCreate/FormCreate"
import style from './Form.module.css'

const Form = () => {
    return (
        <div>
            <h2 className={style.txt}>Create a New Videogame</h2>
            <FormCreate />
        </div>
    )
}

export default Form