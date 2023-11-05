import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import PromocionesCards from "../../components/Promociones";
import Jaleas1 from "../../assets/Jaleas/jaleas1.jpg"
import Jaleas2 from "../../assets/Jaleas/jaleas2.jpg"
import Jaleas3 from "../../assets/Jaleas/jaleas3.jpg"
import Jaleas4 from "../../assets/Jaleas/jaleas4.jpg"
import Jaleas5 from "../../assets/Jaleas/jaleas5.jpg"
import Jaleas6 from "../../assets/Jaleas/jaleas6.jpg"
import Jaleas7 from "../../assets/Jaleas/jaleas7.jpg"

export default function JaleasFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"}/>
            <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
                <PromocionesCards
                    amount={120}
                    image={Jaleas1}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas2}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas3}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas4}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas5}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas6}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Jaleas7}
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