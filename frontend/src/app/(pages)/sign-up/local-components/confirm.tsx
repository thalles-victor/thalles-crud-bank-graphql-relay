"use client";

export function Confirm() {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-envelope text-purple-600 text-2xl"></i>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Verificação de e-mail
        </h3>
        <p className="text-gray-600">
          Enviamos um código de 6 dígitos para
          <span className="font-medium text-gray-800" id="email-display">
            seu@email.com
          </span>
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="verification-code"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Código de verificação
          </label>
          <div className="flex space-x-2 justify-center">
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            type="button"
            className="text-purple-600 text-sm font-medium hover:underline resend-code"
          >
            Reenviar código
          </button>
          <p className="text-gray-500 text-sm mt-1">
            Código expira em <span className="font-medium">04:59</span>
          </p>
        </div>
      </div>
    </div>
  );
}
