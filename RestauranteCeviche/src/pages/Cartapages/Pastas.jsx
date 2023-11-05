import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import PromocionesCards from "../../components/Promociones";
import Pasta1 from "../../assets/Pastas/pasta1.jpg"
import Pasta2 from "../../assets/Pastas/pasta2.jpg"
import Pasta3 from "../../assets/Pastas/pasta3.jpg"

export default function PastasFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"}/>
            <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
                <PromocionesCards
                    amount={120}
                    image={Pasta1}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Pasta2}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Pasta3}
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