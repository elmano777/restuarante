import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import PromocionesCards from "../../components/Promociones";
import aguadito1 from "../../assets/Aguaditos/aguadito1.jpg"
import aguadito2 from "../../assets/Aguaditos/aguadito2.jpg"
import aguadito3 from "../../assets/Aguaditos/aguadito3.jpg"
import aguadito4 from "../../assets/Aguaditos/aguadito4.jpg"
import aguadito5 from "../../assets/Aguaditos/aguadito5.jpg"

export default function AguaditoFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"} />
            <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
                <PromocionesCards
                    amount={120}
                    image={aguadito1}
                />
                <PromocionesCards
                    amount={120}
                    image={aguadito2}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={aguadito3}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={aguadito4}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={aguadito5}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
            </div>
            <FooterFunction />
        </>
    )
}