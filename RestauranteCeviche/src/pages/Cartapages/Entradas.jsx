import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import { PlatosFunction } from "../../components/PlatosCards"
import { useState } from 'react'

export default function EntradasFunction() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    return (
        <>
            <HeaderFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
            <TituloFunction titulo2={"Entradas"} />
            <PlatosFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                productIds={[40, 41, 42, 43, 44, 45, 46]}
            />
            <FooterFunction />
        </>
    )
}