import { format } from "date-fns";
import { User } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { api } from "../../lib/axios";

export function ParticipantConfirmPage() {
  const { participantId } = useParams();

  const [destination, setDestination] = useState();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  async function getTripDetails() {
    const response = await api.get(`/participants/${participantId}`);
    const { trip_id } = response.data.participant;

    const secResponse = await api.get(`/trips/${trip_id}`);
    const { destination, starts_at, ends_at } = secResponse.data.trip;

    return { destination, starts_at, ends_at, tripId: trip_id };
  }

  useEffect(() => {
    getTripDetails().then((data) => {
      setDestination(data.destination);
      setStartDate(data.starts_at);
      setEndDate(data.ends_at);
    });
  });

  async function confirmParticipant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");

    if (!name) return;

    try {
      const response = await api.put(`/participants/${participantId}/confirm`, {
        participantName: name,
      });

      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
        <div className="bg-zinc-900 shadow-shape w-[640px] rounded-xl px-6 py-5 space-y-5">
          <div className="space-y-2">
            <h2 className="text-white font-semibold text-lg">
              Confirme a sua presença
            </h2>
            {destination && (
              <p className="text-sm text-zinc-400">
                Preencha o seu nome para confirmar a sua presença na viagem para{" "}
                <span className="font-semibold text-zinc-100">
                  {destination}
                </span>{" "}
                entre os dias{" "}
                <span className="font-semibold text-zinc-100">
                  {startDate && format(startDate, "d' de 'LLL")} a{" "}
                  {endDate && format(endDate, "d' de 'LLL")}
                </span>
                :
              </p>
            )}
          </div>

          <form onSubmit={confirmParticipant} className="space-y-3">
            <div className="space-y-2">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
                <User className="size-5 text-zinc-400" />
                <Input name="name" placeholder="Seu nome completo" />
              </div>
            </div>
            <Button type="submit" size="full">
              Confirmar presença
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
