import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

interface InviteGuestModalProps {
  toggleGuestsModal: () => void;
  emailsToInvite: string[];
  removeEmailFromInvites: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestModal({
  toggleGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
  addNewEmailToInvite,
}: InviteGuestModalProps) {
  return (
    <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
      <div className="bg-zinc-900 shadow-shape w-[640px] rounded-xl px-6 py-5 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">
              Selecionar Convidados
            </h2>
            <button type="button" onClick={toggleGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="px-2.5 py-1.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                onClick={() => removeEmailFromInvites(email)}
                type="button"
              >
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <Input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
            />
          </div>

          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
