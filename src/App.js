
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Component/Breakfast/Breakfast';
import Details from './Component/Details/Details';
import Dinner from './Component/Dinner/Dinner';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import Signup from './Component/Login/Signup/Signup';
import Lunch from './Component/Lunch/Lunch';
import RequirAuth from './Component/RequirAuth/RequirAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>

        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='/details' element={<RequirAuth>

          <Details></Details>
        </RequirAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
