import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    "arthur.vieiramariano@gmail.com",
  ]);

  function toggleGuestsInput() {
    setGuestsInputOpen(!isGuestsInputOpen);
  }

  function toggleGuestsModal() {
    setGuestsModalOpen(!isGuestsModalOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    email
      ? emailsToInvite.includes(email)
        ? null
        : setEmailsToInvite([...emailsToInvite, email])
      : null;
    event.currentTarget.reset();
  }

  function removeEmailFromInvites(email: string) {
    setEmailsToInvite(emailsToInvite.filter((item) => item !== email));
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                type="text"
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                type="text"
                placeholder="Quando?"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={toggleGuestsInput}
                className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={toggleGuestsInput}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                onClick={toggleGuestsModal}
                className="flex flex-1 items-center gap-2 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 flex-1">
                  Quem estará na viagem?
                </span>
              </button>

              <button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
              <AtSign className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Digite o e-mail do convidado"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              />

              <button
                type="submit"
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
