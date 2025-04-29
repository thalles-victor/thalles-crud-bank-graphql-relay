export function Header() {
  return (
    // <!-- Header -->
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              <i className="fas fa-university text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-purple-600">Woovi-Test</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Início
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Produtos
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Benefícios
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Para Devs
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="md:hidden text-gray-700">
              <i className="fas fa-bars text-2xl"></i>
            </button>
            <a
              href="sign-up"
              className="hidden md:block px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Abra sua conta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
