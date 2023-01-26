// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes
} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import {makeStyles} from '@material-ui/core';
import  Alert  from './components/Alert';


function App() {

  const  useStyles = makeStyles(() =>({
    App:{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes =  useStyles();




  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
    <Routes>

      <Route path='/'element={<Homepage/>} exact/>
      <Route path='/coins/:id' element={<CoinPage/>}/>
    </Routes>

    {/* <Homepage/> */}


    {/* <CoinPage/> */}
    </div>
  <Alert/>
</BrowserRouter>

  );
}

export default App;
