import { Link } from "react-router-dom";

function InfoCard() {
  return (
    <section className="w-full py-10 px-4 lg:py-18">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 justify-items-center lg:max-w-full fade-up">
        {/* Card 1 */}
        <div
          className="
        order-1 
        w-full 
        max-w-[380px] 
        rounded-3xl 
        bg-gradient-to-r
        from-bgreen
        to-green 
        p-6 
        text-white 
        shadow-lg

        transition-all duration-300 ease-out 


        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-2xl 
        "
        >
          <h3 className="text-center font-dm text-2xl font-bold leading-relaxed">
            Veja para onde vai sua
            <br />
            doação
          </h3>

          <p className="mt-4 text-center font-dm italic text-sm sm:text-base">
            Acompanhe como cada
            <br />
            contribuição é usada.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="order-3 
        md:order-2 
        flex 
        w-full 
        max-w-[380px] 
        flex-col 
        items-center 
        justify-center 
        rounded-3xl 
        bg-gradient-to-r 
        from-bgreen 
        to-green 
        p-6 
        text-white 
        shadow-lg
        
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-2xl
        "
        >
          <h3 className="text-center font-dm text-2xl font-bold leading-relaxed">
            Ajude uma criança a
            <br />
            continuar estudando
          </h3>

          <Link to="/doar">
            <button className="mt-6 rounded-2xl bg-white px-6 py-3 font-bold text-bgreen transition hover:scale-105">
              Doe agora!
            </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div
          className="order-2 
        md:order-3 
        w-full 
        max-w-[380px] 
        rounded-3xl 
        bg-gradient-to-r 
        from-bgreen 
        to-green 
        p-6 
        text-white 
        shadow-lg
        
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale[1.01]
        hover:shadow-2xl
        "
        >
          <h3 className="text-center font-dm text-2xl font-bold leading-relaxed">
            Faça a diferença hoje
            <br />
            mesmo
          </h3>

          <p className="mt-4 text-center font-dm italic text-sm sm:text-base">
            Faça sua doação em menos
            <br />
            de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
