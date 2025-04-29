export function CreateTransactionDialog() {
  return (
    // <!-- Content -->
    <div className="bg-white p-6 rounded-b-lg">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="amount"
        >
          Valor do Pagamento
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            R$
          </span>
          <input
            type="text"
            id="amount"
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="0,00"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="recipient"
        >
          Destinatário
        </label>
        <input
          type="text"
          id="recipient"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="CPF/CNPJ, e-mail ou chave PIX"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Descrição (opcional)
        </label>
        <input
          type="text"
          id="description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Ex: Pagamento de serviço"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Método de Pagamento
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="pix-payment-method border-2 border-gray-200 rounded-lg p-4 text-center cursor-pointer active">
            <i className="fas fa-qrcode text-3xl text-indigo-600 mb-2"></i>
            <p className="text-sm font-medium">Ler QR Code</p>
          </div>
          <div className="pix-payment-method border-2 border-gray-200 rounded-lg p-4 text-center cursor-pointer">
            <i className="fas fa-copy text-3xl text-gray-400 mb-2"></i>
            <p className="text-sm font-medium">Copiar Código</p>
          </div>
        </div>
      </div>

      <button
        id="openPixDialog"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
      >
        <i className="fas fa-pix mr-2"></i> Gerar Código PIX
      </button>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Pagamentos via PIX são processados instantaneamente</p>
      </div>
    </div>
  );
}
