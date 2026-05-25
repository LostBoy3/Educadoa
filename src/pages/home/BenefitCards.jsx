import PlantBnef from "../../assets/PlantBnef.svg";
import QualitBnef from "../../assets/QualitBnef.svg";
import OportBnef from "../../assets/OportBnef.svg";
import BookBnef from "../../assets/BookBnef.svg";

function BenefitCards() {
  return (
    <section id="beneficios" className="scroll-mt-28">
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-center p-15 font-potta text-3xl lg:p-20">
          Benefícios que transformam vidas
        </h2>

        <div className="grid gap-15 lg:grid-cols-4 text-center justify-items-center fade-up">
          <div className="flex flex-col items-center gap-4 transition-all duration-150 hover:scale-[1.01] hover:translate-y-1">
            <img src={PlantBnef} alt="" className="max-w-[80px]" />

            <h3 className="font-potta text-[20px] text-[#3B9A66]">
              Desenvolvimento
              <br /> pessoal e social
            </h3>
          </div>

          <div className="flex flex-col items-center gap-4 transition-all duration-150 hover:scale-[1.01] hover:translate-y-1">
            <img src={QualitBnef} alt="" className="max-w-[80px] " />

            <h3 className="font-potta text-[20px] text-[#92C5E1]">
              Acesso à
              <br />
              educação de qualidade
            </h3>
          </div>

          <div className="flex flex-col items-center gap-4 transition-all duration-150 hover:scale-[1.01] hover:translate-y-1">
            <img src={OportBnef} alt="" className="max-w-[80px]" />

            <h3 className="font-potta text-[20px] text-[#B84141]">
              Mais oportunidades
              <br />
              para o futuro
            </h3>
          </div>

          <div className="flex flex-col items-center gap-4 transition-all duration-150 hover:scale-[1.01] hover:translate-y-1">
            <img src={BookBnef} alt="" className="max-w-[80px]" />

            <h3 className="font-potta text-[20px] text-[#E7DB29]">
              Inclusão e
              <br />
              igualdade de chances
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitCards;
