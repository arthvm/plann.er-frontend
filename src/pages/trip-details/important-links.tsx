import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://airbnb.com/journey190823901289812037123/reserva
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva da Pizza
            </span>
            <a
              href="#"
              className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://pizza-journey.com/reserva
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <button className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg py-2 h-11 font-medium hover:bg-zinc-700 w-full justify-center">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}
