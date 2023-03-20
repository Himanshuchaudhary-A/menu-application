import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Background from './components/UI/Background';
import Navbar from './components/UI/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
    </div>
  );
}

export default App;
