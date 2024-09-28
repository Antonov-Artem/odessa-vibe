import { useState } from 'react';
import { Select, SelectItem, Selection } from '@nextui-org/react';
import { EventSortOption, eventSortOptions } from 'entities/event';
import { EventsList } from 'widgets/events-list';

export const EventsPage = () => {
  const [sort, setSort] = useState<Selection>(
    new Set<EventSortOption>(['nothing'])
  );

  return (
    <div className="mx-auto max-w-4xl p-4 h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl text-white">Events</div>
        <div className="flex items-center gap-2">
          <div className="text-white">Sort by:</div>
          <Select
            selectedKeys={sort}
            onSelectionChange={setSort}
            className="w-36"
            selectorIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            }
          >
            {eventSortOptions.map(o => (
              <SelectItem key={o}>
                {o.charAt(0).toUpperCase() + o.slice(1)}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <EventsList sort={Array.from(sort)[0] as EventSortOption} order="asc" />
    </div>
  );
};
