import { HeaderFunction } from "../components/Header";
import PromocionesCards from "../components/Promociones";
import FooterFunction from "../components/Footer";
import TituloFunction from "../components/Titulo"
import Promo1 from "../assets/Promos/Promo1.jpg";
import Promo2 from "../assets/Promos/Promo2.jpg";
import Promo3 from "../assets/Promos/Promo3.jpg";
import Promo4 from "../assets/Promos/Promo4.jpg";
import Promo5 from "../assets/Promos/Promo5.jpg";

export default function PromocionesFunction() {
  return (
    <>
      <HeaderFunction />
      <TituloFunction titulo2={"Promociones"}/>
      <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
        <PromocionesCards
          amount={120}
          image={Promo1}
          titulo={"Pack Familiar 4 personas"}
          descripcion={
            "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
          }
        />
        <PromocionesCards
          amount={170}
          image={Promo2}
          titulo={"Pack familiar 5 personas"}
          descripcion={
            "Ceviche De Pescado + Arroz Con Mariscos + Parihuela Especial + Jalea Mixta + 1 Jarra de Chicha + 1 Leche De Tigre"
          }
        />
        <PromocionesCards
          amount={100}
          image={Promo3}
          titulo={"PROMOCIÓN 1"}
          descripcion={
            "2 Ceviches de pescado + Chicharrón de pescado + arroz con mariscos + jarra de chicha."
          }
        />
        <PromocionesCards
          amount={100}
          image={Promo4}
          titulo={"PROMOCIÓN 2"}
          descripcion={
            "ceviche de pescado + chicharrón de pescado + chaufa de mariscos + causa de cangrejo + jarra de chicha."
          }
        />
        <PromocionesCards
          amount={240}
          image={Promo5}
          titulo={"Pack Familiar 8 personas"}
          descripcion={
            "ceviche de pescado + arroz con mariscos + cabrilla frita + jalea mixta + causa richards + ceviche mixto + jarra de chicha y leche de tigre."
          }
        />
      </div>
      <FooterFunction />
    </>
  );
}
