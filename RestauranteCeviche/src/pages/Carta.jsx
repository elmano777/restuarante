import { HeaderFunction } from "../components/Header";
import CartaCardFunction from '../components/CartaCards'
import FooterFunction from "../components/Footer"
import TituloFunction from "../components/Titulo"
import cartalogo1 from "../assets/CartaLogos/CartaLogo1.jpg"
import cartalogo2 from "../assets/CartaLogos/CartaLogo2.jpg"
import cartalogo3 from "../assets/CartaLogos/CartaLogo3.jpg"
import cartalogo4 from "../assets/CartaLogos/CartaLogo4.jpg"
import cartalogo5 from "../assets/CartaLogos/CartaLogo5.jpg"
import cartalogo6 from "../assets/CartaLogos/CartaLogo6.jpg"
import cartalogo7 from "../assets/CartaLogos/CartaLogo7.jpg"
import cartalogo8 from "../assets/CartaLogos/CartaLogo8.jpg"
import cartalogo9 from "../assets/CartaLogos/CartaLogo9.jpg"
import cartalogo10 from "../assets/CartaLogos/CartaLogo10.jpg"
import cartalogo11 from "../assets/CartaLogos/CartaLogo11.jpg"
import cartalogo12 from "../assets/CartaLogos/CartaLogo12.jpg"
import cartalogo13 from "../assets/CartaLogos/CartaLogo13.jpg"
import cartalogo14 from "../assets/CartaLogos/CartaLogo14.png"
import cartalogo15 from "../assets/CartaLogos/CartaLogo15.jpg"

export default function CartaFunction() {
  return (
    <>
      <HeaderFunction />
      <TituloFunction titulo2={"Carta"}/>
      <div className="grid grid-cols-3">
        <CartaCardFunction imagen={cartalogo1} descripcion={"Entradas"} />
        <CartaCardFunction imagen={cartalogo2} descripcion={"Ceviches"} />
        <CartaCardFunction imagen={cartalogo3} descripcion={"Lenguado"} />
        <CartaCardFunction imagen={cartalogo4} descripcion={"Tiraditos"} />
        <CartaCardFunction imagen={cartalogo5} descripcion={"Arrocess"} />
        <CartaCardFunction imagen={cartalogo6} descripcion={"Tacu Tacus"} />
        <CartaCardFunction imagen={cartalogo7} descripcion={"Aguadito"} />
        <CartaCardFunction imagen={cartalogo8} descripcion={"Jaleas"} />
        <CartaCardFunction imagen={cartalogo9} descripcion={"Platos Extras"} />
        <CartaCardFunction imagen={cartalogo10} descripcion={"Pescado Frito"} />
        <CartaCardFunction imagen={cartalogo11} descripcion={"Platos Criollos"} />
        <CartaCardFunction imagen={cartalogo12} descripcion={"Pastas"} />
        <CartaCardFunction imagen={cartalogo13} descripcion={"Chita"} />
        <CartaCardFunction imagen={cartalogo14} descripcion={"Bebidas"} />
        <CartaCardFunction imagen={cartalogo15} descripcion={"GiftCards"} />
      </div>
      <FooterFunction />
    </>
  );
}
