import dayjs from 'dayjs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spacer } from '@nextui-org/react';
import { getEvents, EventSortOption, EventSortOrder } from 'entities/event';

export type Props = {
  sort?: EventSortOption;
  order?: EventSortOrder;
};

export const EventsList = ({ sort, order }: Props) => {
  const [page, setPage] = useState(1);

  const { data } = getEvents({ page, limit: 10, sort, order });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.events.map(e => (
        <div className="rounded-2xl border border-neutral-700">
          <div className="rounded-t-2xl aspect-square bg-neutral-700" />
          <div className="p-4 flex flex-col">
            <p className="text-lg font-medium text-white">{e.title}</p>
            <Spacer y={0.5} />
            <p className="text-neutral-400 truncate">{e.description}</p>
            <Spacer y={4} />
            <div className="flex">
              <span className="material-symbols-outlined text-neutral-400">
                calendar_month
              </span>
              <Spacer x={1} />
              <p className="text-white">
                {dayjs(e.date).format('DD MMM YYYY')}
              </p>
            </div>
            <Spacer y={4} />
            <div className="flex gap-2">
              <Button
                as={Link}
                color="primary"
                to={`/events/${e.id}/register`}
                className="w-full"
              >
                Register
              </Button>
              <Button
                as={Link}
                to={`/events/${e.id}/participants`}
                className="w-full text-white bg-neutral-800"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
