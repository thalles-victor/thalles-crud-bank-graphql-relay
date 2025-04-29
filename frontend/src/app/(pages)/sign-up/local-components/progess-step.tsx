import { Steps } from "../page";

interface ProgressStepProps {
  step: Steps;
}
export function ProgressStep(props: ProgressStepProps) {
  return (
    <div className="flex justify-between mb-8">
      <div className="step flex flex-col items-center relative">
        <div
          className={`
             w-8 h-8 rounded-full  flex items-center justify-center mb-2
             ${
               props.step == "register"
                 ? "bg-purple-600 text-white"
                 : "bg-gray-200 text-gray-600 "
             }`}
        >
          <span>1</span>
        </div>
        <span className="text-sm font-medium text-gray-700">cria conta</span>
        <div
          className={`absolute top-4 left-full -ml-6 w-12 h-0.5 ${
            props.step === "register" ? "bg-purple-600" : "bg-gray-200"
          }`}
        ></div>
      </div>

      <div className="step flex flex-col items-center relative">
        <div
          className={`
             w-8 h-8 rounded-full  flex items-center justify-center mb-2
             ${
               props.step == "confirm"
                 ? "bg-purple-600 text-white"
                 : "bg-gray-200 text-gray-600 "
             }`}
        >
          <span>2</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Verificação</span>
        <div
          className={`absolute top-4 left-full -ml-6 w-12 h-0.5 ${
            props.step === "confirm" ? "bg-purple-600" : "bg-gray-200"
          }`}
        ></div>
      </div>

      <div className="step flex flex-col items-center relative">
        <div
          className={`
             w-8 h-8 rounded-full  flex items-center justify-center mb-2
             ${
               props.step == "create-password"
                 ? "bg-purple-600 text-white"
                 : "bg-gray-200 text-gray-600 "
             }`}
        >
          <span>3</span>
        </div>
        <span className="text-sm font-medium text-gray-700">Criar senha</span>
        <div
          className={`absolute top-4 left-full -ml-6 w-12 h-0.5 ${
            props.step === "create-password" ? "bg-purple-600" : "bg-gray-200"
          }`}
        ></div>
      </div>
    </div>
  );
}
