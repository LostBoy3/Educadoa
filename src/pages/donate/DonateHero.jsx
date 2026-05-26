import DonateImage from "../../assets/DonateImage.svg";

function DonateHero() {
  return (
    <div className="relative h-[500px] md:h-[650px] flex justify-center overflow-hidden items-start">
      <img
        className="absolute w-full inset-0 w-full h-full object-cover"
        src={DonateImage}
        alt="Img"
      />
      <h1 className="relative z-10 text-3xl lg:text-5xl font-bold text-center max-w-4x1 px-6 pt-10 text-white font-dm  ">
        Conectamos pessoas que querem ajudar com ONGs que <br />
        realmente fazem diferença.
      </h1>
    </div>
  );
}

export default DonateHero;
