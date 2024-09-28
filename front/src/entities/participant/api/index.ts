import useSWR, { mutate } from 'swr';
import { fetcher } from 'shared/api';
import { Participant, RegisterParticipantData } from '../model';

export const registerParticipant = (
  eventId: Id,
  data: RegisterParticipantData
) =>
  mutate(
    `http://localhost:3000/events/${eventId}`,
    fetcher(`http://localhost:3000/events/${eventId}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
  );

export const getEventParticipants = (eventId: Id) =>
  useSWR<Participant[]>(
    `http://localhost:3000/events/${eventId}/participants`,
    fetcher
  );
