"use client";

import { z } from "zod";

export function Register() {
  function handleRegister() {}

  return (
    <div>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="document"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            CPF
          </label>

          <input
            type="text"
            id="document"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
            placeholder="000.000.000-00"
            required
          />
          <span className="text-sm text-red-400">
            NÃO USE TEU CPF VERDADEIRO,{" "}
            <a
              className="text-blue-500 text-sm"
              href="https://www.4devs.com.br/gerador_de_cpf"
              target="_black"
            >
              gere um nesse site
            </a>
          </span>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              required
            />
          </div>
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            Concordo com os
            <a href="#" className="text-purple-600 hover:underline">
              Termos de Serviço
            </a>
            e
            <a href="#" className="text-purple-600 hover:underline">
              Política de Privacidade
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
