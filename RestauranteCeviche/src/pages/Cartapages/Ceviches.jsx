import { HeaderFunction } from "../../components/Header";
import FooterFunction from "../../components/Footer"
import TituloFunction from "../../components/Titulo"
import { PlatosFunction } from "../../components/PlatosCards"
import { useState } from 'react'

export default function CevicheFunction() {
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
            <TituloFunction titulo2={"Ceviches"} />
            <PlatosFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                productIds={[27, 28, 29, 30, 31, 32]}
            />
            <FooterFunction />
        </>
    )
}