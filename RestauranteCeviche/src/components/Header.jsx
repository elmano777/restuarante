import logo from "../assets/rex-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

export function HeaderFunction() {
  return (
    <div className="flex flex-col bg-white text-black w-full h-auto md:flex-row">
      <div className="hidden md:flex md:w-1/4 md:h-auto md:justify-center md:items-center">
        <img src={logo} alt="logo" className="h-40 w-40" />
      </div>
      <div className="grid grid-cols-2 h-auto justify-center items-center w-full gap-10 p-10 md:flex md:flex-row md:w-1/2">
        <button className="bg-black p-4 rounded-lg text-white hover:text-green-500">
          Inicio
        </button>
        <NavLink
          to="/Nosotros"
          className="bg-black p-4 rounded-lg text-white hover:text-green-500"
        >
          Promociones
        </NavLink>
        <button className="bg-black p-4 rounded-lg text-white hover:text-green-500">
          Carta
        </button>
        <button className="bg-black p-4 rounded-lg text-white hover:text-green-500">
          Reparto
        </button>
        <button className="bg-black p-4 rounded-lg text-white hover:text-green-500">
          Contacto
        </button>
      </div>
      <div className="flex justify-center items-center h-auto w-full md:w-1/4 gap-12">
        <button className="bg-orange-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
          <BsFillBasket2Fill />
          Carrito
        </button>
        <button className="bg-blue-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
          <BiLogIn />
          Ingresar
        </button>
      </div>
    </div>
  );
}