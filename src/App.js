import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Login from '../src/Login/Login';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>



      </Routes>

    </div>
  );
}

export default App;