"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterType, useRegisterUser } from "../local-hooks/useRegister";
import { useForm } from "react-hook-form";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "../page";
import { useEffect } from "react";

interface RegisterProps {
  setUserRegistered: (user: User) => void;
  nextStep: () => void;
}

export function Register({ setUserRegistered, nextStep }: RegisterProps) {
  const { data, error, createAccount } = useRegisterUser();
  const { register, handleSubmit } = useForm<RegisterType>();

  function handleRegister(props: RegisterType) {
    createAccount({
      name: props.name,
      cpfCnpj: props.cpfCnpj,
      email: props.email,
    });
  }

  useEffect(() => {
    if (data) {
      nextStep();
      setUserRegistered(data);
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
            {...register("name")}
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
            {...register("email")}
          />
          {error === "email in used" && <p className="text-red-500">{error}</p>}
        </div>

        <div>
          <label
            htmlFor="document"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            CPF
          </label>

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
          <input
            type="text"
            id="document"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus focus:outline-none transition-colors"
            placeholder="000.000.000-00"
            required
            {...register("cpfCnpj")}
          />

          {error === "cpf or cnpj in used" && (
            <p className="text-red-500">{error}</p>
          )}
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
      <div className="pt-6 gap-2">
        <button
          type="submit"
          className="w-full gradient-bg text-white py-3 px-4 rounded-lg font-bold hover:opacity-90 transition-opacity next-step"
        >
          Continuar <FontAwesomeIcon icon={faArrowRight} className="mt-1" />
        </button>
      </div>
    </form>
  );
}
