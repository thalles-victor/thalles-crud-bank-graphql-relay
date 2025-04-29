import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import GraphQlLogo from "../../public/graphql-logo.svg";

export default function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O banco digital feito para testar suas habilidades
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Woovi-Test oferece uma plataforma completa para desenvolvedores
                praticarem integrações com APIs bancárias em um ambiente seguro
                e controlado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/dashboard"
                  className="flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  Comece agora <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <a
                  href="http://localhost:3333/graphql"
                  className="flex gap-2  items-center px-6 py-3 border border-white rounded-lg font-medium text-center hover:bg-white hover:bg-opacity-10 transition-colors hover:text-purple-600"
                >
                  Documentação
                  <Image src={GraphQlLogo} alt="graphql" height={32} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-white bg-opacity-10 rounded-full absolute -top-10 -left-10"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 bg-white bg-opacity-5 rounded-full absolute -bottom-10 -right-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Aplicativo Woovi-Test"
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tudo que você precisa para testar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Woovi-Test simula um ambiente bancário real com dados fictícios
              para você desenvolver e testar sem riscos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                API Completa
              </h3>
              <p className="text-gray-600">
                Endpoints RESTful para todas as operações bancárias:
                transferências, pagamentos, extratos e muito mais.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-shield-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Ambiente Seguro
              </h3>
              <p className="text-gray-600">
                Dados 100% fictícios e isolados, permitindo testes sem
                preocupações com segurança ou privacidade.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-bolt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Webhooks em Tempo Real
              </h3>
              <p className="text-gray-600">
                Simule notificações em tempo real para testar o processamento de
                eventos em sua aplicação.
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-credit-card text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cartões Virtuais
              </h3>
              <p className="text-gray-600">
                Gere números de cartões de crédito virtuais para testar fluxos
                de pagamento e antifraude.
              </p>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Dashboard Completo
              </h3>
              <p className="text-gray-600">
                Acompanhe todas as transações e testes em um painel intuitivo
                com gráficos e relatórios.
              </p>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition-all duration-300">
              <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mb-6">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Multiplos Usuários
              </h3>
              <p className="text-gray-600">
                Crie contas para vários usuários e simule interações entre eles
                para testar cenários complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How It Works Section --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integre a API Woovi-Test em minutos e comece a testar
              imediatamente
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-800 rounded-xl p-6 overflow-hidden">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* <pre className="text-green-400 text-sm overflow-x-auto">
<span className="text-purple-300">const</span> <span className="text-blue-300">WooviSDK</span> = <span className="text-yellow-300">require</span>(<span className="text-green-300">'woovi-sdk'</span>);

<span className="text-purple-300">const</span> woovi = <span className="text-blue-300">new</span> <span className="text-blue-300">WooviSDK</span>({
  apiKey: <span className="text-green-300">'sua_chave_api'</span>,
  env: <span className="text-green-300">'sandbox'</span>
});

<span className="text-gray-500">// Criar uma nova conta</span>
<span className="text-purple-300">const</span> account = <span className="text-purple-300">await</span> woovi.<span className="text-blue-300">accounts</span>.<span className="text-yellow-300">create</span>({
  name: <span className="text-green-300">'João Silva'</span>,
  document: <span className="text-green-300">'12345678909'</span>
});

<span className="text-gray-500">// Realizar uma transferência</span>
<span className="text-purple-300">const</span> transfer = <span className="text-purple-300">await</span> woovi.<span className="text-blue-300">transfers</span>.<span className="text-yellow-300">create</span>({
  amount: <span className="text-yellow-300">10000</span>, <span className="text-gray-500">// R$ 100,00</span>
  fromAccountId: account.<span className="text-blue-300">id</span>,
  toAccountId: <span className="text-green-300">'conta_destino'</span>,
  description: <span className="text-green-300">'Transferência de teste'</span>
});</pre> */}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Integração simples e poderosa
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa API foi projetada para ser intuitiva e fácil de usar, com
                documentação detalhada e exemplos em várias linguagens de
                programação.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-gray-700">
                    SDKs disponíveis para Node.js, Python, Java e Ruby
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-gray-700">
                    Autenticação via API Key ou OAuth 2.0
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-gray-700">
                    Suporte a Webhooks para eventos em tempo real
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-gray-700">
                    Mock de respostas para testar diferentes cenários
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-3 gradient-bg text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Ver documentação completa
              <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que os desenvolvedores dizem
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Woovi-Test é usado por milhares de desenvolvedores para testar
              integrações bancárias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Testimonial 1 --> */}
            <div className="testimonial-card p-8 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4 className="font-bold">Carlos Mendes</h4>
                  <p className="text-sm opacity-70">Engenheiro de Software</p>
                </div>
              </div>
              <p className="mb-6">
                "Woovi-Test nos permitiu testar todas as integrações bancárias
                do nosso aplicativo financeiro sem precisar criar contas reais
                em bancos. Economizamos semanas de desenvolvimento!"
              </p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="testimonial-card p-8 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4 className="font-bold">Ana Lúcia</h4>
                  <p className="text-sm opacity-70">Tech Lead</p>
                </div>
              </div>
              <p className="mb-6">
                "A API é extremamente bem documentada e os exemplos de código
                foram essenciais para nossa equipe começar rapidamente.
                Conseguimos implementar todas as funcionalidades em apenas 2
                dias."
              </p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="testimonial-card p-8 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4 className="font-bold">Roberto Almeida</h4>
                  <p className="text-sm opacity-70">CTO</p>
                </div>
              </div>
              <p className="mb-6">
                "Os webhooks em tempo real nos permitiram testar completamente
                nosso sistema de notificações antes de ir para produção. A
                capacidade de simular falhas foi especialmente valiosa."
              </p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Crie sua conta gratuita e tenha acesso completo à plataforma
              Woovi-Test para testar suas integrações bancárias.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 gradient-bg text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Criar conta gratuita <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Falar com vendas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
