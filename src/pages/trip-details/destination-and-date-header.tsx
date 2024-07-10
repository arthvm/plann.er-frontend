import { MapPin, Calendar, Settings2 } from "lucide-react";

export function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zing-100">Sao Paulo, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zing-100">19 a 25 de Dezembro</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <button className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      </div>
    </div>
  );
}
