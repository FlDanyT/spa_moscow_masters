import logo from './logo.svg'; // src={logo} 
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Goods from './pages/Goods';
import Category from './pages/Category';

function App() {

  return (
    <Router>
      <div className='App'>
      <button className='button'>
        <Link to="/goods">Товары</Link>
      </button>

      <br/>

      <button className='button'>
      <Link to="/category">Категории</Link>
      </button>

      <Routes>
        <Route path='/goods' element={<Goods/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
      </Routes>

    </div>
    </Router>
  );

}

export default App;