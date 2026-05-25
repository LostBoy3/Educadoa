function HeadLine() {
  return (
    <div className="flex flex-col p-2 gap-4 pt-10 md:gap-8 md:pt-12 lg:p-6 fade-up">
      <h1 className="font-potta text-blue text-2xl sm:text-4xl md:text-4xl lg:text-6xl lg:pt-12 leading-tight">
        Transforme o futuro de uma <span className="text-green">criança</span>
        <br />
        através da{" "}
        <span className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
          educação.
        </span>
      </h1>

      <h2 className="font-dm font-extrabold text-black text-1xl sm:text-xl md:text-2xl lg:text-3xl leading-tight">
        Milhares de crianças ainda não têm acesso à educação.
        <br /> <span className="text-green">Você </span>
        pode mudar isso hoje.
      </h2>
    </div>
  );
}

export default HeadLine;
