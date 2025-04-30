"use client";

import { useState } from "react";
import { Confirm } from "./local-components/confirm";
import { Register } from "./local-components/register";
import { CratePassword } from "./local-components/create-password";
import { ProgressStep } from "./local-components/progess-step";
import { redirect } from "next/navigation";

export type Steps = "register" | "confirm" | "create-password";

export interface User {
  name: string;
  email: string;
}

export default function SignUpPage() {
  const [userRegistered, setUserRegistered] = useState<User | null>(null);
  const [step, setStep] = useState<Steps>("register");
  const [targe, setTarget] = useState();

  console.log("userRegistered is: ", userRegistered);

  function nextStep() {
    if (step === "register") setStep("confirm");
    if (step === "confirm") setStep("create-password");
    if (step === "create-password") redirect("/");
  }

  function previewStep() {
    if (step === "confirm") setStep("register");
    if (step === "create-password") setStep("confirm");
  }

  return (
    <main className="flex-grow flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="gradient-bg py-4 px-6">
            <h2 className="text-2xl font-bold text-white">Crie sua conta</h2>
            <p className="text-purple-100">
              Comece a testar nossa API em minutos
            </p>
          </div>

          <div className="p-6 space-y-6">
            <ProgressStep step={step} />
            {step === "confirm" && userRegistered && (
              <Confirm email={userRegistered?.email} nextStep={nextStep} />
            )}
            {step === "register" && (
              <Register
                setUserRegistered={setUserRegistered}
                nextStep={nextStep}
              />
            )}
            {step === "create-password" && <CratePassword />}
          </div>
        </div>
      </div>
    </main>
  );
}
