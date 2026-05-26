function Footer() {
  return (
    <footer className="bg-bgreen text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3 text-center">
        <div className="flex flex-col justify-center">
          <h3 className="font-potta text-3xl text-white text-transparent bg-clip-text text-center md:text-left">
            Educadoa
          </h3>

          <p className="font-dm text-sm text-white leading-relaxed mt-2 text-center md:text-left">
            Milhares de crianças ainda não têm acesso à educação. Você pode
            mudar isso hoje.
          </p>
        </div>

        <div>
          <h4 className="font-potta text-xl mb-4">Navegação</h4>

          <ul className="space-y-2 text-white font-dm">
            <li className="hover:text-white cursor-pointer">
              <a href="#start">Início</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#beneficios">Benefícios</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#possibilidades">Possibilidades</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#diferenca">Diferença</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-potta text-xl mb-4">Contato</h4>

          <ul className="space-y-2 text-white font-dm">
            <li>📧 Educadoa@Educadoa.com</li>
            <li>📞 (41) 99999-9999</li>
            <li>📍 Curitiba - PR</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-white text-sm font-dm">
        © 2026 Educadoa. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
