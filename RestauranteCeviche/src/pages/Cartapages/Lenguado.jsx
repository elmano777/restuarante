import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import PromocionesCards from "../../components/Promociones";
import Lenguado1 from "../../assets/Lenguado/lenguado1.jpg"
import Lenguado2 from "../../assets/Lenguado/lenguado2.jpg"
import Lenguado3 from "../../assets/Lenguado/lenguado3.jpg"
import Lenguado4 from "../../assets/Lenguado/lenguado4.jpg"
import Lenguado5 from "../../assets/Lenguado/lenguado5.jpg"
import Lenguado6 from "../../assets/Lenguado/lenguado6.jpg"
import Lenguado7 from "../../assets/Lenguado/lenguado7.jpg"
import Lenguado8 from "../../assets/Lenguado/lenguado8.jpg"
import Lenguado9 from "../../assets/Lenguado/lenguado9.jpg"
import Lenguado10 from "../../assets/Lenguado/lenguado10.jpg"
import Lenguado11 from "../../assets/Lenguado/lenguado11.jpg"

export default function LenguadoFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"}/>
            <div className="flex flex-col mx-4 md:grid md:grid-cols-3 md:gap-4 h-auto text-center">
                <PromocionesCards
                    amount={120}
                    image={Lenguado1}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado2}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado3}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado4}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado5}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado6}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado7}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado8}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado9}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado10}
                    titulo={"Pack Familiar 4 personas"}
                    descripcion={
                        "ceviche de pescado + arroz con mariscos + jalea mixta + jarra de chicha."
                    }
                />
                <PromocionesCards
                    amount={120}
                    image={Lenguado11}
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