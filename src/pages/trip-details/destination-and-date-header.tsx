import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateRange, DayPicker } from "react-day-picker";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";

export function DestinationAndDateHeader() {
  const { tripId } = useParams();

  const [isChangingTrip, setChangingTrip] = useState(false);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => {
      const trip = response.data.trip;

      setDestination(trip.destination);
      setEventStartAndEndDates({
        from: new Date(trip.starts_at),
        to: new Date(trip.ends_at),
      });
    });
  }, [tripId]);

  const selectedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" ate ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  function toggleChangingTrip() {
    setChangingTrip(!isChangingTrip);
  }

  function toggleDatePicker() {
    setDatePickerOpen(!isDatePickerOpen);
  }

  async function changeTrip() {
    if (!destination) return;
    if (!eventStartAndEndDates?.from) return;
    if (!eventStartAndEndDates?.to) return;

    await api.put(`/trips/${tripId}`, {
      destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates?.to,
    });

    toggleChangingTrip();
  }

  return (
    <>
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <Input
            onChange={(event) => setDestination(event.target.value)}
            disabled={!isChangingTrip}
            type="text"
            textSize="large"
            placeholder="Para onde você vai?"
            value={destination}
          />
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={toggleDatePicker}
            disabled={!isChangingTrip}
            className="flex items-center gap-2 outline-none text-left"
          >
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-400 min-w-40  flex-1">
              {selectedDate ?? "Quando?"}
            </span>
          </button>
          <div className="w-px h-6 bg-zinc-800" />

          {isChangingTrip ? (
            <Button onClick={changeTrip}>
              Confirmar
              <ArrowRight className="size-5" />
            </Button>
          ) : (
            <Button onClick={toggleChangingTrip} variant="secondary">
              Alterar local/data
              <Settings2 className="size-5" />
            </Button>
          )}
        </div>
      </div>

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
    </>
  );
}
