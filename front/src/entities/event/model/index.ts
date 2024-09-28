export const eventSources = ['Social media', 'Friend', 'Found myself'] as const;

export const eventSortOptions = [
  'nothing',
  'title',
  'date',
  'organizer',
] as const;

export type EventSource = (typeof eventSources)[number];

export type EventSortOption = (typeof eventSortOptions)[number];

export type EventSortOrder = 'asc' | 'desc';

export type EventQuery = {
  page?: number;
  limit?: number;
  sort?: EventSortOption;
  order?: EventSortOrder;
};

export type EventQueryResult = {
  hasMore: boolean;
  page: number;
  limit: number;
  events: IEvent[];
};

export type IEvent = {
  id: Id;
  title: string;
  description: string;
  date: DateTime;
};
