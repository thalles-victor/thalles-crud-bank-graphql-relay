"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGenerateConfirmationToken } from "../local-hooks/useGenerateConfirmationToken";
import { useEffect, useState } from "react";
import { useValidateConfirmationToken } from "../local-hooks/useValidateConfirmationToken";

import { useForm } from "react-hook-form";

interface ConfirmProps {
  nextStep: () => void;
  email: string;
}

export function Confirm({ nextStep, email }: ConfirmProps) {
  const { handleGenerateConfirmationToken } = useGenerateConfirmationToken();
  const { data, handleValidateToken } = useValidateConfirmationToken();
  const [firsCallToGenerateToken, setFirsCallToGenerateToken] =
    useState<boolean>(false);
  const { register, handleSubmit } = useForm<{ token: string }>();

  function verifyConfirmationToken(data: any) {
    if (data) {
      handleValidateToken({
        email,
        token: data.token,
      });
    }
  }

  useEffect(() => {
    if (!firsCallToGenerateToken) {
      handleGenerateConfirmationToken({ email });
      setFirsCallToGenerateToken(true);
    }

    if (data === "success") {
      nextStep();
    }
  }, [data]);

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

      <form
        className="space-y-4"
        onSubmit={handleSubmit(verifyConfirmationToken)}
      >
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
              maxLength={4}
              className=" h-12 text-center text-xl border border-gray-300 rounded-lg input-focus focus:outline-none w-32"
              required
              {...register("token")}
            />
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            type="button"
            className="text-purple-600 text-sm font-medium hover:underline resend-code"
            onClick={() => handleGenerateConfirmationToken({ email })}
          >
            Reenviar código
          </button>
          <p className="text-gray-500 text-sm mt-1">
            Código expira em <span className="font-medium">04:59</span>
          </p>
        </div>
        <button
          type="submit"
          className="w-full gradient-bg text-white py-3 px-4 rounded-lg font-bold hover:opacity-90 transition-opacity next-step"
        >
          Continuar <FontAwesomeIcon icon={faArrowRight} className="mt-1" />
        </button>
      </form>
    </div>
  );
}
