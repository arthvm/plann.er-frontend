import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";
import { ParticipantConfirmPage } from "./pages/participant-confirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
  {
    path: "/participants/:participantId/confirm",
    element: <ParticipantConfirmPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
