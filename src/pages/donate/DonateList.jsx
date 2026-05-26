import { ongs } from "../../data/ongs";
import DonateCard from "../../components/DonateCard";

function DonateList() {
  return (
    <section className="flex flex-wrap justify-center gap-15 fade-up">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center">ONGs disponíveis</h2>

        <p className="text-gray-500 text-center mt-4 max-w-2xl mx-auto">
          Escolha uma instituição e entre em contato diretamente para descobrir
          como contribuir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ongs.map((ong) => (
          <DonateCard key={ong.id} ong={ong} />
        ))}
      </div>
    </section>
  );
}

export default DonateList;
