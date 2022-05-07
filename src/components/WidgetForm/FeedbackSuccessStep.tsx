import React from "react";
import { CloseButton } from "../CloseButton";
import SuccessUrl from "./../../assets/Success.svg";
interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={SuccessUrl} alt="Sucesso" className="w-10 h-10 " />
        <span className="text-xl mt-2">Agradecemos o seu feedback</span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-rocket-brand  duration-200 disabled:opacity-50 disabled:hover:bg-rocket-brand"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
