import { ongs } from "../../data/ongs";
import DonateCard from "../../components/DonateCard";
import { useState } from "react";

function DonateList() {
  const [search, setSearch] = useState("");

  const filteredOngs = ongs.filter((ong) =>
    `${ong.name} ${ong.city} ${ong.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <section className="w-full flex flex-col items-center gap-12 fade-up">
      <div className="text-center">
        <h2 className="text-4xl font-bold">ONGs disponíveis</h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Escolha uma instituição e entre em contato diretamente para descobrir
          como contribuir.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar ONG, cidade ou categoria..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-3xl px-5 py-3 rounded-2xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-green"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOngs.map((ong) => (
          <DonateCard key={ong.id} ong={ong} />
        ))}
      </div>
    </section>
  );
}

export default DonateList;
