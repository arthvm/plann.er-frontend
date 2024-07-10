import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

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

          <div className="w-full bg-zinc-800" />

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
        </div>
      </main>

      {isCreateActivityModalOpen && (
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
                  <input
                    name="title"
                    placeholder="Qual a atividade?"
                    className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justifiy-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <input
                      type="datetime-local"
                      name="occurs_at"
                      placeholder="Data e horário da atividade"
                      className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full gap-2 bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium hover:bg-lime-400"
              >
                Salvar atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
