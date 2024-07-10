import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  toggleConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  toggleConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
      <div className="bg-zinc-900 shadow-shape w-[640px] rounded-xl px-6 py-5 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={toggleConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="space-y-2">
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
              <User className="size-5 text-zinc-400" />
              <input
                type="name"
                name="name"
                placeholder="Seu nome completo"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
              <Mail className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full gap-2 bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
