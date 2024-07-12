import { Calendar, Tag } from "lucide-react";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({
  toggleCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    window.document.location.reload();
  }

  return (
    <Modal
      title="Cadastrar atividade"
      subtitle="Todos os convidados podem ver as atividades."
      toggleModal={toggleCreateActivityModal}
    >
      <form onSubmit={createActivity} className="space-y-3">
        <div className="space-y-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <Input name="title" placeholder="Qual a atividade?" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <Input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
              />
            </div>
          </div>
        </div>

        <Button type="submit" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  );
}
