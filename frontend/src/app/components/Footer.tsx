export function Footer() {
  return (
    // <!-- Footer -->
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                <i className="fas fa-university text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Woovi-Test</h3>
            </div>
            <p className="mb-4">
              O banco digital feito para desenvolvedores testarem suas
              integrações com APIs bancárias em um ambiente seguro.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sandbox
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cartões Virtuais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Webhooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SDKs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>© 2023 Woovi-Test. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
