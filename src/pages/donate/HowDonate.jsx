function HowDonate() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-center p-15 font-potta text-3xl lg:p-20">
        Como funcionam as doações:
      </h2>

      <section
        className="
        max-w-7xl 
        rounded-3xl 
        bg-gradient-to-r
        from-bgreen
        to-green 
        p-6 
        text-white 
        shadow-lg
        text-center
        
        transition-all duration-300 ease-out 

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-2xl "
      >
        <h3 className="font-bold p-2 text-2xl">
          Conectamos pessoas a iniciativas que realmente fazem diferença.
        </h3>

        <h3 className=" text-1xl">
          Ao clicar no botão da ONG, você será direcionado para entrar em
          contato diretamente com a instituição. Trabalhamos para manter a
          plataforma segura e transparente. Se tiver dúvidas sobre
          autenticidade, informações ou funcionamento de alguma ONG, nossa
          equipe de suporte estará pronta para ajudar.
        </h3>
      </section>
    </div>
  );
}

export default HowDonate;
