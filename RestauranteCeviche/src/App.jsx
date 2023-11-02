import {HomePageFunction} from './pages/Homepage'
import PromocionesFunction from './pages/Promociones'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageFunction/>}/>
        <Route path="/Nosotros" element={<PromocionesFunction/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

