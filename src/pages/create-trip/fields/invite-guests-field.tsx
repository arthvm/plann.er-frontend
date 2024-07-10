import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestsInputProps {
  toggleGuestsModal: () => void;
  emailsToInvite: string[];
  toggleConfirmTripModal: () => void;
}

export function InviteGuestsInput({
  toggleGuestsModal,
  emailsToInvite,
  toggleConfirmTripModal,
}: InviteGuestsInputProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        onClick={toggleGuestsModal}
        className="flex flex-1 items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 flex-1">
          {emailsToInvite.length > 0
            ? `${emailsToInvite.length} pessoa(s) convidada(s)`
            : "Quem estará na viagem?"}
        </span>
      </button>

      <button
        onClick={toggleConfirmTripModal}
        className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
