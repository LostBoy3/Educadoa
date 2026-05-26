function DonateCard({ ong }) {
  return (
    <div className="bg-[#E7F3EC] max-w-[450px] rounded-3xl p-6 flex flex-col justify-between opacity-90 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl hover:rotate-1 hover:opacity-100">
      <div className="flex gap-4 items-center">
        <img src={ong.logo} alt={ong.name} className="w-[100px]" />

        <h3 className="font-potta text-2xl">{ong.name}</h3>
      </div>
      <p className="text-black mt-1 text-center italic">{ong.city}</p>

      <p className="py-8 text-center font-dm">{ong.description}</p>

      <ul className="flex flex-col gap-2 pb-6 list-disc list-inside font-dm">
        {ong.category.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <a
        href={ong.contact}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-full
          text-center
          bg-gradient-to-r
          from-bgreen
          to-green
          text-white
          py-3
          rounded-2xl
          font-bold
          transition-all
          duration-150
          hover:translate-y-0.5
          hover:scale-[1.02]
          block"
      >
        Fazer doação
      </a>
    </div>
  );
}

export default DonateCard;

// <img className="w-full object-cover" src={ong.logo} alt={ong.name}
2; // <p className="text-gray-600 mt-4">{ong.description}</p>
// <span className="text-green-600 font-semibold">{ong.category}</span>
// <h className="text-2xl font-bold mt-2">{ong.name}</h2>
//
// <a href={ong.contact} target="_blank" className="inline-block mt-6 bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-2xl">Entrar em contato </a>
