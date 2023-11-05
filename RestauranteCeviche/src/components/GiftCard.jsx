export default function GiftCard({ amount, image }) {
  return (
    <div className="my-12 md:mx-4 md:my-12 md:w-1/3 rounded-xl w-full  h-auto border border-solid border-black">
      <div className="bg-gray-400 p-10 rounded-t-xl">
        <img
          src={image}
          alt={`Gift Card de ${amount} soles`}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex flex-col items-center m-4">
        <h1 className="text-2xl font-bold mb-2">GIFT CARD {amount} SOLES</h1>
        <p className="text-xl mb-4">S/ {amount}.00</p>
        <button className="bg-yellow-400 p-4 border border-solid border-black rounded-xl">
          Comprar
        </button>
      </div>
    </div>
  );
}
