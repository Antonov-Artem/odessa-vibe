import { z } from 'zod';
import { eventSources } from 'entities/event';

export const registerParticipantSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  birthDate: z.string(),
  source: z.enum(eventSources),
});
