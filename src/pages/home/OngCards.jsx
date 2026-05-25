import { Link } from "react-router-dom";

import LogoOng from "../../assets/LogoOng1.svg";

function OngCards() {
  return (
    <section id="possibilidades" className="scroll-mt-28">
      <div>
        <h2 className="text-3xl text-center p-15 pt-35 font-potta">
          Como você pode fazer parte:
        </h2>

        <div className="flex flex-wrap justify-center gap-15 fade-up">
          <div className="bg-[#E7F3EC] max-w-[450px] rounded-3xl p-6 flex flex-col justify-between opacity-90 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl hover:rotate-1 hover:opacity-100">
            <div className="flex gap-4 items-center">
              <img src={LogoOng} alt="" className="w-[100px]" />

              <h3 className="font-potta text-2xl">
                Um Lugar <br />
                Ao Sol
              </h3>
            </div>

            <p className="py-8 text-center font-dm">
              Empoderar crianças e jovens de comunidades rurais da Amazônia a
              partir da promoção da leitura e da gestão de bibliotecas
              comunitárias como espaço para compartilhar saberes.
            </p>

            <ul className="flex flex-col gap-2 pb-6 list-disc list-inside font-dm">
              <li>Doação de roupas</li>
              <li>Doação de livros</li>
            </ul>

            <Link
              to="/doar"
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
            </Link>
          </div>

          <div className="bg-[#E7F3EC] max-w-[450px] rounded-3xl p-6 flex flex-col justify-between opacity-90 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl hover:rotate-1 hover:opacity-100">
            <div className="flex gap-4 items-center">
              <img src={LogoOng} alt="" className="w-[100px]" />

              <h3 className="font-potta text-2xl">
                Um Lugar <br />
                Ao Sol
              </h3>
            </div>

            <p className="py-8 text-center font-dm">
              Somos uma OSC chamada Passos da Criança. Desde 2004, promovemos o
              desenvolvimento integral de crianças e adolescentes em
              vulnerabilidade social da Vila Torres, em Curitiba/PR.
            </p>

            <ul className="flex flex-col gap-2 pb-6 list-disc list-inside font-dm">
              <li>Doação de roupas</li>
              <li>Doação de livros</li>
            </ul>

            <Link
              to="/doar"
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
            </Link>
          </div>

          <div className="bg-[#E7F3EC] max-w-[450px] rounded-3xl p-6 flex flex-col justify-between transition-all opacity-90 duration-400 hover:scale-[1.02] hover:shadow-2xl hover:rotate-1 hover:opacity-100">
            <div className="flex gap-4 items-center">
              <img src={LogoOng} alt="" className="w-[100px]" />

              <h3 className="font-potta text-2xl">
                Um Lugar <br />
                Ao Sol
              </h3>
            </div>

            <p className="py-8 text-center font-dm">
              Empoderar crianças e jovens de comunidades rurais da Amazônia a
              partir da promoção da leitura e da gestão de bibliotecas
              comunitárias como espaço para compartilhar saberes.
            </p>

            <ul className="flex flex-col gap-2 pb-6 list-disc list-inside font-dm">
              <li>Doação de roupas</li>
              <li>Doação de livros</li>
            </ul>

            <Link
              to="/doar"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OngCards;
