import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({
  toggleCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
      <div className="bg-zinc-900 shadow-shape w-[640px] rounded-xl px-6 py-5 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">
              Cadastrar atividade
            </h2>
            <button type="button" onClick={toggleCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos os convidados podem ver as atividades.
          </p>
        </div>

        <form className="space-y-3">
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
      </div>
    </div>
  );
}
