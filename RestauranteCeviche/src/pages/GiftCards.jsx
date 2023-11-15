import { HeaderFunction } from "../components/Header";
import FooterFunction from "../components/Footer";
import TituloFunction from "../components/Titulo"
import { GiftFunction } from '../components/GiftCards'
import { useState } from 'react'

export default function GiftCardsFunction() {
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
      <TituloFunction titulo2={"GiftCards"} />
      <GiftFunction
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        productIds={[1, 2, 3]}
      />
      <FooterFunction />
    </>
  );
}
