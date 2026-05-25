import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Button from "../components/button";

function Header() {
  return (
    <section id="start">
      <div className="flex items-center justify-between p-3 w-full px-4 sm:px-6 md:px-10 py-4 font-dm font-light">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-28 sm:w-28 md:w-38" />
        </Link>

        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-2xl">
          <li>
            <a href="#beneficios" className="">
              Benefícios
            </a>
          </li>

          <li>
            <a href="#possibilidades">Possibilidades</a>
          </li>

          <li>
            <a href="#diferenca">Diferença</a>
          </li>
        </ul>

        <div className="scale-90 sm:scale-100">
          <Link to="/doar">
            <Button />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
