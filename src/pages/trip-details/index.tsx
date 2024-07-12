import { Plus } from "lucide-react";
import { useState } from "react";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { ImportantLinks } from "./important-links";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setCreateActivityModalOpen] =
    useState(false);

  function toggleCreateActivityModal() {
    setCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={toggleCreateActivityModal}>
              <Plus className="size-5" />
              Casdastrar Atividade
            </Button>
          </div>

          <Activities />
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
