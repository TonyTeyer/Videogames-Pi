/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Landing from './Views/LandingPage/Landing';
import Home from './Views/Home/Home';
import Form from './Views/Form/Form';
import Detail from './Views/Details/Detail';
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, getGenres } from './redux/actions';


function App() {

  const location = useLocation()
  const dispatch = useDispatch()

  // cuando se levante el componente se hacen los llamados a las actions de traer todos los juegos y generos
  useEffect(() => {
    dispatch(getAllGames())
    dispatch(getGenres())
  }, [])

  return (
    <div className="App">
      {
        location.pathname !== '/' && <NavBar />
      }
      <Route exact path='/' render={() => <Landing />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/form' render={() => <Form />} />
      <Route path='/detail/:id' render={() => <Detail />} />
    </div>
  );
}

export default App;
