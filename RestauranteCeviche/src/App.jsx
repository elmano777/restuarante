import {HomePageFunction} from './pages/Homepage'
import PromocionesFunction from './pages/Promociones'
import CartaFunction from './pages/Carta'
import ContactoFunction from "./pages/Contacto"
import GiftCardsFunction from './pages/GiftCards'
import RepartoFunction from './pages/Reparto'
import ReservaFunction from './pages/Reserva'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageFunction/>}/>
        <Route path="/GiftCards" element={<GiftCardsFunction/>}/>
        <Route path="/Promociones" element={<PromocionesFunction/>}/>
        <Route path="/Carta" element={<CartaFunction/>}/>
        <Route path="/Reparto" element={<RepartoFunction/>}/>
        <Route path="/Contacto" element={<ContactoFunction/>}/>
        <Route path="/Reservas" element={<ReservaFunction/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

