import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Modal } from "../../../components/modal";

interface DestinationAndDateProps {
  isGuestsInputOpen: boolean;
  toggleGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartAndEndDates: DateRange | undefined;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export function DestinationAndDateField({
  isGuestsInputOpen,
  toggleGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates,
}: DestinationAndDateProps) {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  function toggleDatePicker() {
    setDatePickerOpen(!isDatePickerOpen);
  }

  const selectedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" ate ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <Input
          onChange={(event) => setDestination(event.target.value)}
          disabled={isGuestsInputOpen}
          type="text"
          textSize="large"
          placeholder="Para onde você vai?"
        />
      </div>

      <button
        onClick={toggleDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 outline-none text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 min-w-40  flex-1">
          {selectedDate ?? "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <Modal
          size="fit"
          title="Selecione a data"
          toggleModal={toggleDatePicker}
        >
          <DayPicker
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
            locale={ptBR}
            disabled={{ before: new Date() }}
            mode="range"
          />
        </Modal>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={toggleGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={toggleGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
