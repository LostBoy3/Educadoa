function DifferenceCards() {
  return (
    <section id="diferenca" className="scroll-mt-28">
      <div className="py-30">
        <h2 className="text-3xl text-center p-15 font-potta">
          Nossos diferenciais:
        </h2>

        <div className="flex flex-wrap justify-center gap-8 px-6 fade-up">
          <div
            className="
            bg-[#F8F8F2]
            max-w-[320px]
            min-h-[340px]
            rounded-[35px]
            p-8
            text-center
            shadow-lg
            flex
            flex-col
            items-center
            justify-start
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-[#E7F3EC] flex items-center justify-center text-4xl">
              ❤️
            </div>

            <h3 className="font-potta text-2xl mb-4">Impacto real</h3>

            <p className="font-dm text-lg leading-relaxed text-[#4A4A4A] max-w-[240px]">
              Sua doação transforma vidas e fortalece comunidades todos os dias.
            </p>
          </div>

          <div
            className="
            bg-[#F8F8F2]
            max-w-[320px]
            min-h-[340px]
            rounded-[35px]
            p-8
            text-center
            shadow-lg
            flex
            flex-col
            items-center
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-[#E4F1FA] flex items-center justify-center text-4xl">
              🔒
            </div>

            <h3 className="font-potta text-2xl mb-4">Transparência</h3>

            <p className="font-dm text-lg leading-relaxed text-[#4A4A4A] max-w-[240px]">
              Você acompanha como cada contribuição está sendo utilizada.
            </p>
          </div>

          <div
            className="
            bg-[#F8F8F2]
            max-w-[320px]
            min-h-[340px]
            rounded-[35px]
            p-8
            text-center
            shadow-lg
            flex
            flex-col
            items-center
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-[#FFE8E8] flex items-center justify-center text-4xl">
              🤝
            </div>

            <h3 className="font-potta text-2xl mb-4">Conexão humana</h3>

            <p className="font-dm text-lg leading-relaxed text-[#4A4A4A] max-w-[240px]">
              Aproximamos pessoas que querem ajudar de quem realmente precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferenceCards;
