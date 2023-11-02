import { BiDirections } from "react-icons/bi";
import { ImParagraphLeft } from "react-icons/im";
import { GrSchedules } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";

export default function FooterFunction() {
  return (
    <div className="w-full h-auto bg-red-700 text-white">
      <div className="flex flex-row w-full h-auto">
        <div className="flex flex-col w-1/4 h-auto m-12">
          <div className="flex flex-grow items-center gap-2">
            <BiDirections />
            <p>Dirección</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2321</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2318</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Ignacio Merino 2331</p>
          </div>
        </div>
        <div className="flex flex-col w-1/4 h-auto m-12">
          <div className="flex flex-grow items-center gap-2">
            <GrSchedules />
            <p>Dirección</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2321</p>
          </div>
        </div>
        <div className="flex flex-col w-1/4 h-auto m-12">
          <div className="flex flex-grow items-center gap-2">
            <BiDirections />
            <p>Dirección</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2321</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2318</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Ignacio Merino 2331</p>
          </div>
        </div>
        <div className="flex flex-col w-1/4 h-auto m-12">
          <div className="flex flex-grow items-center gap-2">
            <BiDirections />
            <p>Dirección</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2321</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Brigadier Pumacahua 2318</p>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <ImParagraphLeft />
            <p>Ignacio Merino 2331</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-auto gap-4">
        <div className="flex flex-row">
          <AiFillFacebook className="w-12 h-12" />
          <AiOutlineMail className="w-12 h-12" />
        </div>
        <p className="flex flex-row items-center gap-2">
          <AiFillCopyrightCircle />
          Richards | Desarrollado por Enfocus Soluciones
        </p>
      </div>
    </div>
  );
}
