import { EventSource } from 'entities/event';

export type Participant = {
  id: Id;
  email: Email;
  fullName: string;
  birthDate: DateTime;
  source: EventSource;
};

export type RegisterParticipantData = {
  email: Email;
  fullName: string;
  birthDate: DateTime;
  source: EventSource;
};
