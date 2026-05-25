import { useState } from "react";
import FeedImg from "../../assets/FeedImg.svg";

function FeedBack() {
  const avaliacao = [
    {
      nome: "José da Silva",
      texto:
        "O site transmite muita confiança. Gostei principalmente da clareza nas informações e da forma como tudo é explicado.",
    },

    {
      nome: "Mariana Galvão",
      texto:
        "Acompanhar os resultados das doações me deixou muito mais segura. É raro encontrar um projeto tão humano e transparente hoje em dia.",
    },

    {
      nome: "Carlos Henrique",
      texto:
        "Antes de conhecer o projeto, eu sempre tinha receio de doar pela internet. O que me fez confiar foi a transparência e a forma como mostram exatamente onde cada contribuição é utilizada. Dá para perceber que existe cuidado real com as pessoas e compromisso com a causa.",
    },
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  function proximoFeedback() {
    if (indexAtual < avaliacao.length - 1) {
      setIndexAtual(indexAtual + 1);
    } else {
      setIndexAtual(0);
    }
  }

  function feedbackAnterior() {
    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    } else {
      setIndexAtual(avaliacao.length - 1);
    }
  }

  return (
    <div className="">
      <h2 className="text-3xl text-center p-15 font-potta">Avaliações:</h2>

      <div className="flex justify-center w-full px-6 gap-10 fade-up">
        <button
          onClick={feedbackAnterior}
          className="bg-[#CFE6D7] w-12 h-12 rounded-full text-2xl p-2 hover:bg-[#b8d6c3] transition duration-300 hover:scale[1.02] hover:translate-y-1"
        >
          🠸
        </button>

        <div className="max-w-3xl bg-[#E7F3EC] rounded-3xl p-8 flex-col sm:flex sm:flex-row items-center gap-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:translate-y-1">
          <div className="flex flex-col items-center min-w-[120px]">
            <img
              src={FeedImg}
              alt=""
              className="w-24 h-24 rounded-full object-cover"
            />

            <h3 className="mt-1 font-bold text-center">
              {avaliacao[indexAtual].nome}
            </h3>
          </div>

          <p className="font-dm text-black leading-relaxed">
            {avaliacao[indexAtual].texto}
          </p>
        </div>
        <button
          onClick={proximoFeedback}
          className="bg-[#CFE6D7] w-12 h-12 p-2 rounded-full text-2xl hover:bg-[#b8d6c3] transition duration-300 hover:scale-[1.02] hover:translate-y-1"
        >
          🠺
        </button>
      </div>
    </div>
  );
}

export default FeedBack;
