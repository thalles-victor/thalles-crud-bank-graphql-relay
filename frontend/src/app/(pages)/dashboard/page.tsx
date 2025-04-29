import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faBarcode,
  faCreditCard,
  faDownload,
  faMoneyBill,
  faPaperPlane,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* <!-- Welcome Section --> */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Bem-vindo de volta!
            </h2>
            <p className="text-gray-600">Aqui está um resumo da sua conta</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 cursor-pointer">
              <FontAwesomeIcon icon={faDownload} width={16} className="mr-2" />
              Exportar
            </button>
            <button className="flex items-center px-4 py-2 gradient-bg text-white rounded-lg font-medium hover:bg-purple-700 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} width={16} className="mr-2" /> Nova
              transação
            </button>
          </div>
        </div>

        {/* <!-- Account Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Saldo disponível</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  R$ 12.459,23
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faWallet}
                  width={22}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">Conta corrente • 1234-5</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Receitas este mês</p>
                <h3 className="text-2xl font-bold text-green-600 mt-1">
                  R$ 5.200,00
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-green-50 text-green-600">
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faArrowUp}
                  width={22}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                +12% em relação ao mês passado
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Despesas este mês</p>
                <h3 className="text-2xl font-bold text-red-600 mt-1">
                  R$ 3.740,77
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-red-50 text-red-600">
                <i className="fas fa-arrow-down text-xl"></i>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faArrowDown}
                  width={22}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                -5% em relação ao mês passado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Quick Actions --> */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ações rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mb-2">
              <FontAwesomeIcon
                icon={faPaperPlane}
                width={32}
                className="text-white text-xl"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Transferir
            </span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mb-2">
              <FontAwesomeIcon
                icon={faBarcode}
                width={32}
                className="text-white text-xl"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Pagar</span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mb-2">
              <i className="fas fa-money-bill-wave text-xl"></i>
              <FontAwesomeIcon
                icon={faMoneyBill}
                width={32}
                className="text-white text-xl"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Depositar</span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white mb-2">
              <i className="fas fa-credit-card text-xl"></i>
              <FontAwesomeIcon
                icon={faCreditCard}
                width={32}
                className="text-white text-xl"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Cartões</span>
          </button>
        </div>
      </section>

      {/* <!-- Recent Transactions --> */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Transações recentes
          </h3>
          <button className="text-purple-600 font-medium hover:text-purple-800">
            Ver todas
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* <!-- Transaction Filters --> */}
          <div className="p-4 border-b border-gray-100 flex flex-wrap gap-2">
            <button className="px-3 py-1 gradient-bg text-white rounded-full text-sm font-medium">
              Todas
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              Receitas
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              Despesas
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              Este mês
            </button>
          </div>

          {/* <!-- Transactions List --> */}
          <div className="divide-y divide-gray-100">
            {/* <!-- Transaction 1 --> */}
            <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer transaction-card">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      width={32}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Salário</p>
                    <p className="text-sm text-gray-500">
                      15/06/2023 • Empresa XYZ
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+ R$ 4.500,00</p>
                  <p className="text-sm text-gray-500">Crédito em conta</p>
                </div>
              </div>
            </div>

            {/* <!-- Transaction 2 --> */}
            <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer transaction-card">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Supermercado</p>
                    <p className="text-sm text-gray-500">
                      14/06/2023 • Mercado ABC
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">- R$ 287,35</p>
                  <p className="text-sm text-gray-500">Débito em conta</p>
                </div>
              </div>
            </div>

            {/* <!-- Transaction 3 --> */}
            <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer transaction-card">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Transferência</p>
                    <p className="text-sm text-gray-500">
                      12/06/2023 • João Silva
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+ R$ 700,00</p>
                  <p className="text-sm text-gray-500">PIX recebido</p>
                </div>
              </div>
            </div>

            {/* <!-- Transaction 4 --> */}
            <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer transaction-card">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <i className="fas fa-tv"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Streaming</p>
                    <p className="text-sm text-gray-500">
                      10/06/2023 • Assinatura mensal
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">- R$ 39,90</p>
                  <p className="text-sm text-gray-500">Débito automático</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 text-center">
            <button className="text-purple-600 font-medium hover:text-purple-800">
              Carregar mais transações
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Credit Card --> */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Seu cartão Woovi-Test
          </h3>
          <button className="text-purple-600 font-medium hover:text-purple-800">
            Gerenciar cartões
          </button>
        </div>

        <div className="gradient-bg rounded-2xl p-6 text-white relative overflow-hidden h-48">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-10 -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white opacity-10 -mr-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm opacity-80">Cartão Woovi-Test</p>
                <p className="text-xl font-bold">•••• •••• •••• 4679</p>
              </div>
              <div className="w-12 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <i className="fab fa-cc-visa text-xl"></i>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm opacity-80">Titular</p>
                <p className="font-medium">CLIENTE WOOVI</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Válido até</p>
                <p className="font-medium">06/27</p>
              </div>
              <div>
                <p className="text-sm opacity-80">CVV</p>
                <p className="font-medium">•••</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-sm text-gray-500">Fatura atual</p>
            <p className="text-xl font-bold text-gray-800">R$ 1.245,70</p>
            <p className="text-xs text-gray-500 mt-1">Vence em 05/07</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-sm text-gray-500">Limite disponível</p>
            <p className="text-xl font-bold text-gray-800">R$ 3.754,30</p>
            <p className="text-xs text-gray-500 mt-1">de R$ 5.000,00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
