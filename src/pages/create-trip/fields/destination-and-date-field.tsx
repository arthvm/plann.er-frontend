import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

interface DestinationAndDateProps {
  isGuestsInputOpen: boolean;
  toggleGuestsInput: () => void;
}

export function DestinationAndDateField({
  isGuestsInputOpen,
  toggleGuestsInput,
}: DestinationAndDateProps) {
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

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <Input
          disabled={isGuestsInputOpen}
          ofSize="small"
          textSize="large"
          type="text"
          placeholder="Quando?"
        />
      </div>

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
