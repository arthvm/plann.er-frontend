import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { Guests } from "../create-trip/fields/guests";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setCreateActivityModalOpen] =
    useState(false);

  function toggleCreateActivityModal() {
    setCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={toggleCreateActivityModal}
              className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Casdastrar Atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 19
                </span>
                <span className="text-xs text-zinc-500">Sabado</span>
              </div>

              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 20
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>

                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>

                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>

                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          toggleCreateActivityModal={toggleCreateActivityModal}
        />
      )}
    </div>
  );
}
