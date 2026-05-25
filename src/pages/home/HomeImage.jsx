import { useEffect, useState } from "react";
import ImgKid from "../../assets/kidimg.svg";

function HomeImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.min(1.2, 1 + scrollY * 0.0005);

  const pt = Math.min(80, 10 + scrollY * 0.2);

  const rotate = Math.min(scrollY * 0.002, 2);

  return (
    <div className="flex justify-center pt-10 pb-50 w-full fade-up">
      <img
        src={ImgKid}
        alt="kid"
        className="w-full max-w-[850px] rounded-[50px] object-cover shadow-2xl transition-transform duration-300 will-change-transform"
        style={{
          transform: `
          scale(${scale})
          translateY(${pt}px)
          rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}

export default HomeImage;
