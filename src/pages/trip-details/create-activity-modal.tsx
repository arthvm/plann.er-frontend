import { format } from "date-fns";
import { Calendar, Clock, Tag } from "lucide-react";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";
import { api } from "../../lib/axios";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import dayjs from "dayjs";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({
  toggleCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  function toggleDatePicker() {
    setDatePickerOpen(!isDatePickerOpen);
  }

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title) return;
    if (!selectedDate) return;
    if (!time) return;

    const [hours, minutes] = time.split(":").map(Number);
    const occurs_at = dayjs(selectedDate).hour(hours).minute(minutes).format();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    window.document.location.reload();
  }

  setSelectedDate;

  return (
    <>
      {isDatePickerOpen ? (
        <Modal
          size="fit"
          title="Selecione a data"
          toggleModal={toggleDatePicker}
        >
          <DayPicker
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ptBR}
            disabled={{ before: new Date() }}
            mode="single"
          />
        </Modal>
      ) : (
        <Modal
          title="Cadastrar atividade"
          subtitle="Todos os convidados podem ver as atividades."
          toggleModal={toggleCreateActivityModal}
        >
          <form onSubmit={createActivity} className="space-y-3">
            <div className="space-y-2">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
                <Tag className="size-5 text-zinc-400" />
                <Input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  name="title"
                  placeholder="Qual a atividade?"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2"
                  type="button"
                  onClick={toggleDatePicker}
                >
                  <Calendar className="size-5 text-zinc-400" />
                  <span className="text-lg text-zinc-400 min-w-40  flex-1 text-left">
                    {selectedDate
                      ? format(selectedDate, "d' de 'LLL")
                      : "Quando?"}
                  </span>
                </button>

                <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2  ">
                  <Clock className="size-5 text-zinc-400" />
                  <Input
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    type="time"
                    placeholder="Que horas?"
                    name="time"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" size="full">
              Salvar atividade
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
}
