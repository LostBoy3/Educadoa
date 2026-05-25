import { motion, useScroll, useTransform } from "framer-motion";
import ImgKid from "../../assets/kidimg.svg";

function HomeImage() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);

  const y = useTransform(scrollY, [0, 1000], [0, 80]);

  const rotate = useTransform(scrollY, [0, 1000], [0, 2]);

  return (
    <div className="hidden lg:flex justify-center pt-10 pb-50 w-full">
      <motion.img
        src={ImgKid}
        alt="kid"
        style={{
          scale,
          y,
          rotate,
        }}
        className="w-full max-w-[850px] rounded-[50px] object-cover shadow-2xl will-change-transform"
      />
    </div>
  );
}

export default HomeImage;
