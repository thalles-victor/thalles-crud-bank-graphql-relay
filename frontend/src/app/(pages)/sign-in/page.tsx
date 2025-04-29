export default function SignInPage() {
  return (
    <main className="flex-grow flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="gradient-bg py-4 px-6">
            <h2 className="text-2xl font-bold text-white">
              Bem-vindo de volta
            </h2>
            <p className="text-purple-100">Faça login para acessar sua conta</p>
          </div>

          <section className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors pr-10"
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="absolute password-toggle text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <i className="fas fa-eye"></i>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Lembrar-me
                  </label>
                </div>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full gradient-bg text-white py-3 px-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Entrar <i className="fas fa-sign-in-alt ml-2"></i>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors social-btn"
              >
                <i className="fab fa-google text-red-500 mr-2"></i> Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors social-btn"
              >
                <i className="fab fa-apple text-gray-800 mr-2"></i> Apple
              </button>
            </div>
          </section>

          <div className="px-6 pb-6 text-center">
            <p className="text-sm text-gray-600">
              Ao continuar, você concorda com nossos
              <a href="#" className="text-purple-600 hover:underline">
                Termos de Serviço
              </a>
              e
              <a href="#" className="text-purple-600 hover:underline">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
