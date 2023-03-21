import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Background from './components/UI/Background';
import Navbar from './components/UI/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
       
      
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/menu' element ={<Menu/>}/>
        <Route path='/blog' element ={'Blog'}/>
      </Routes>
      
    
</div>
  );
}

export default App;
