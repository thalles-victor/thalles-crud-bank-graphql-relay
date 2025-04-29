"use client";

export function CratePassword() {
  return (
    <div>
      <div className="space-y-4">
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors pr-10"
            placeholder="Crie uma senha segura"
            required
          />
          <button
            type="button"
            className="absolute password-toggle text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>

        <div className="relative">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirmar senha
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors pr-10"
            placeholder="Digite a senha novamente"
            required
          />
          <button
            type="button"
            className="absolute password-toggle text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Sua senha deve conter:
          </h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <span>Pelo menos 8 caracteres</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <span>Pelo menos 1 número</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-gray-300 mr-2"></i>
              <span>Pelo menos 1 caractere especial</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-gray-300 mr-2"></i>
              <span>Pelo menos 1 letra maiúscula</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
