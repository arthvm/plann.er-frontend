import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Arthur Mariano
            </span>
            <span className="block font-medium text-sm text-zinc-400 truncate">
              arthur.vieiramariano@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Alicia Rodrigues
            </span>
            <span className="block font-medium text-sm text-zinc-400 truncat">
              alicia@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <button className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg py-2 h-11 font-medium hover:bg-zinc-700 w-full justify-center">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
