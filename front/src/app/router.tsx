import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { EventsPage } from 'pages/events';
import { EventDetails } from 'pages/events-details';
import { RegisterPage } from 'pages/register';
import { ParticipantsPage } from 'pages/participants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'events/:eventId',
        element: <EventDetails />,
        children: [
          { path: 'register', element: <RegisterPage /> },
          {
            path: 'participants',
            element: <ParticipantsPage />,
          },
        ],
      },
    ],
  },
]);
