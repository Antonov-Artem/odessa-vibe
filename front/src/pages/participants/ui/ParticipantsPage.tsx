import { useParams } from 'react-router-dom';
import { getEventParticipants } from 'entities/participant';
import { getEventById } from 'entities/event';
import { Divider, Input } from '@nextui-org/react';

export const ParticipantsPage = () => {
  const { eventId } = useParams();
  const { data: event } = getEventById(eventId!);
  const { data: participants } = getEventParticipants(eventId!);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-neutral-500">Event participants</div>
          <div className="text-3xl font-bold text-white">{event?.title}</div>
        </div>
        <Divider />
        <Input
          isClearable
          placeholder="Search..."
          startContent={
            <span className="material-symbols-outlined text-xl text-white">
              search
            </span>
          }
          className="md:max-w-xs"
          classNames={{ clearButton: 'text-white' }}
        />
        <div className="flex flex-col gap-6">
          {participants?.length === 0 ? (
            <div className="text-neutral-500">No participants yet</div>
          ) : (
            participants?.map(p => (
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-red-500" />
                <div className="flex flex-col">
                  <div className="font-bold text-white">{p.fullName}</div>
                  <div className="text-sm text-neutral-500">{p.email}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
