import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

interface DestinationAndDateProps {
  isGuestsInputOpen: boolean;
  toggleGuestsInput: () => void;
}

export function DestinationAndDateField({
  isGuestsInputOpen,
  toggleGuestsInput,
}: DestinationAndDateProps) {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

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
        <div className="inset-0 bg-black/60 fixed flex items-center justify-center">
          <div className="bg-zinc-900 shadow-shape rounded-xl px-6 py-5 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-semibold text-lg">
                  Selecione a data
                </h2>
                <button type="button" onClick={toggleDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
              locale={ptBR}
              disabled={{ before: new Date() }}
              mode="range"
            />
          </div>
        </div>
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
