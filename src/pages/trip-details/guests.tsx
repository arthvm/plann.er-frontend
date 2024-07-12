import { AtSign, CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isInviteGuestModalOpen, setInviteGuestModalOpen] = useState(false);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  function toggleInviteGuestModal() {
    setInviteGuestModalOpen(!isInviteGuestModalOpen);
  }

  async function inviteGuest(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();

    if (!email) return;

    await api.post(`/trips/${tripId}/invites`, {
      email,
    });

    window.document.location.reload(); //REFACTOR
  }

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Convidados</h2>

        <div className="space-y-5">
          {participants.map((participant, index) => (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block font-medium text-sm text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="text-green-400 size-5 shrink-0" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <Button
          onClick={toggleInviteGuestModal}
          size="full"
          variant="secondary"
        >
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>

      {isInviteGuestModalOpen && (
        <Modal
          title="Adicionar convidado"
          subtitle="O convidado ira receber um email para confirmar a participação na viagem."
          toggleModal={toggleInviteGuestModal}
        >
          <form onSubmit={inviteGuest} className="space-y-3">
            <div className="space-y-2">
              <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2  ">
                <AtSign className="size-5 text-zinc-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                />
              </div>
            </div>

            <Button type="submit" size="full">
              Convidar
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
}
