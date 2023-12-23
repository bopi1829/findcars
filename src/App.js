import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Car from './Pages/Car'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="cars" element={<Car />} />        
    </Routes>
  </BrowserRouter>
}

export default App;
