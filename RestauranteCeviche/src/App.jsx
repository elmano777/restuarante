import { HomePageFunction } from './pages/Homepage'
import PromocionesFunction from './pages/Promociones'
import CartaFunction from './pages/Carta'
import GiftCardsFunction from './pages/GiftCards'
import RepartoFunction from './pages/Reparto'
import EntradasFunction from './pages/Cartapages/Entradas'
import CevichesFunction from './pages/Cartapages/Ceviches'
import AguaditoFunction from './pages/Cartapages/Aguadito'
import ArrocesFunction from './pages/Cartapages/Arroces'
import BebidasFunction from './pages/Cartapages/Bebidas'
import ChitaFunction from './pages/Cartapages/Chita'
import JaleasFunction from './pages/Cartapages/Jaleas'
import LenguadoFunction from './pages/Cartapages/Lenguado'
import TiraditosFunction from './pages/Cartapages/Tiraditos'
import PastasFunction from './pages/Cartapages/Pastas'
import PescadoFritoFunction from './pages/Cartapages/PescadoFrito'
import PlatosCriollosFunction from './pages/Cartapages/PlatosCriollos'
import PlatosExtrasFunction from './pages/Cartapages/PlatosExtras'
import TacuTacusFunction from './pages/Cartapages/TacuTacus'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageFunction />} />
        <Route path="/GiftCards" element={<GiftCardsFunction />} />
        <Route path="/Promociones" element={<PromocionesFunction />} />
        <Route path="/Carta" element={<CartaFunction />}/>
        <Route path="/Entradas" element={<EntradasFunction/>} />
        <Route path="/Ceviches" element={<CevichesFunction/>} />
        <Route path="/Lenguado" element={<LenguadoFunction/>} />
        <Route path="/Tiraditos" element={<TiraditosFunction/>} />
        <Route path="/Arrocess" element={<ArrocesFunction/>} />
        <Route path="/Tacu Tacus" element={<TacuTacusFunction/>} />
        <Route path="/Aguadito" element={<AguaditoFunction/>} />
        <Route path="/Jaleas" element={<JaleasFunction/>} />
        <Route path="/Platos Extras" element={<PlatosExtrasFunction/>} />
        <Route path="/Pescado Frito" element={<PescadoFritoFunction/>} />
        <Route path="/Platos Criollos" element={<PlatosCriollosFunction/>} />
        <Route path="/Pastas" element={<PastasFunction/>} />
        <Route path="/Chita" element={<ChitaFunction/>} />
        <Route path="/Bebidas" element={<BebidasFunction/>} />
        <Route path="/Reparto" element={<RepartoFunction />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

