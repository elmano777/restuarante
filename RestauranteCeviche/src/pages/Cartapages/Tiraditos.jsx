import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import PromocionesCards from "../../components/Promociones";
import Tiraditos1 from "../../assets/Tiraditos/tiraditos1.jpg"
import Tiraditos2 from "../../assets/Tiraditos/tiraditos2.jpg"
import Tiraditos3 from "../../assets/Tiraditos/tiraditos3.jpg"

export default function TiraditosFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"}/>
            <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
                <PromocionesCards
                    amount={120}
                    image={Tiraditos1}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Tiraditos2}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Tiraditos3}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
            </div>
            <FooterFunction/>
        </>
    )
}