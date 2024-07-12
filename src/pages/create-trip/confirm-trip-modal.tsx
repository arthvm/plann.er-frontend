import { format } from "date-fns";
import { Mail, User } from "lucide-react";
import { FormEvent } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";

interface ConfirmTripModalProps {
  toggleConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
  destination: string;
  selectedDate: DateRange | undefined;
}

export function ConfirmTripModal({
  toggleConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
  destination,
  selectedDate,
}: ConfirmTripModalProps) {
  const subtitle = (
    <>
      Para concluir a criação da viagem para{" "}
      <span className="font-semibold text-zinc-100">{destination}</span> nas
      datas de{" "}
      <span className="font-semibold text-zinc-100">
        {selectedDate?.from &&
          selectedDate?.to &&
          format(selectedDate?.from, "d' de 'LLL")
            .concat(" a ")
            .concat(format(selectedDate?.to, "d' de 'LLL"))}
      </span>{" "}
      preencha seus dados abaixo:
    </>
  );

  return (
    <Modal
      toggleModal={toggleConfirmTripModal}
      title="Confirmar criação da viagem"
      subtitle={subtitle}
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="space-y-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
            <User className="size-5 text-zinc-400" />
            <Input
              onChange={(event) => setOwnerName(event.target.value)}
              name="name"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
            <Mail className="size-5 text-zinc-400" />
            <Input
              onChange={(event) => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
            />
          </div>
        </div>
        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  );
}
