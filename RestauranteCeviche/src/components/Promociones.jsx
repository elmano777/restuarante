export default function PromocionesCards({
    amount,
    image,
    titulo="",
    descripcion="",
}) {
    return (
        <div className="my-2 md:my-7 md:w-full rounded-xl w-full h-auto border border-solid border-black">
            <div className="">
                <img
                    src={image}
                    alt={`Promocion de ${amount} soles`}
                    className="w-full h-auto object-cover rounded-t-xl"
                />
            </div>
            <div className="flex flex-col items-center m-4">
                <h1 className="text-2xl font-bold mb-2">{titulo}</h1>
                <p className="text-xl mb-4">{descripcion}</p>
                <p className="text-xl mb-4">S/ {amount}.00</p>
                <button className="bg-yellow-400 p-4 border border-solid border-black rounded-xl">
                    Comprar
                </button>
            </div>
        </div>
    );
}
