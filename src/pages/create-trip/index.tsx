import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateField } from "./fields/destination-and-date-field";
import { InviteGuestsInput } from "./fields/invite-guests-field";
import { InviteGuestModal } from "./invite-guests-modal";

export function CreateTripPage() {
  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    "arthur.vieiramariano@gmail.com",
  ]);

  const navigate = useNavigate();

  function toggleGuestsInput() {
    setGuestsInputOpen(!isGuestsInputOpen);
  }

  function toggleGuestsModal() {
    setGuestsModalOpen(!isGuestsModalOpen);
  }

  function toggleConfirmTripModal() {
    setConfirmTripModalOpen(!isConfirmTripModalOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    email
      ? emailsToInvite.includes(email)
        ? null
        : setEmailsToInvite([...emailsToInvite, email])
      : null;
    event.currentTarget.reset();
  }

  function removeEmailFromInvites(email: string) {
    setEmailsToInvite(emailsToInvite.filter((item) => item !== email));
  }

  //Temp
  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateField
            isGuestsInputOpen={isGuestsInputOpen}
            toggleGuestsInput={toggleGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsInput
              emailsToInvite={emailsToInvite}
              toggleConfirmTripModal={toggleConfirmTripModal}
              toggleGuestsModal={toggleGuestsModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
          toggleGuestsModal={toggleGuestsModal}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          toggleConfirmTripModal={toggleConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
