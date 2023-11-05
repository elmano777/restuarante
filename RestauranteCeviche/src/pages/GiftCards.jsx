import { HeaderFunction } from "../components/Header";
import GiftCard from "../components/GiftCard";
import logo from "../assets/rex-removebg-preview.png";
import FooterFunction from "../components/Footer";
import TituloFunction from "../components/Titulo"

export default function GiftCardsFunction() {
  return (
    <>
      <HeaderFunction />
      <TituloFunction titulo2={"GiftCards"}/>
      <div className="flex flex-col mx-4 md:flex md:flex-row h-auto">
        <GiftCard amount={50} image={logo} />
        <GiftCard amount={100} image={logo} />
        <GiftCard amount={150} image={logo} />
      </div>
      <FooterFunction />
    </>
  );
}
