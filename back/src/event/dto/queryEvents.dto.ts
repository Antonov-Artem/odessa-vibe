export type EventSortOption = 'title' | 'date' | 'organizer';

export type EventSortOrder = 'asc' | 'desc';

export type EventQuery = {
  page?: number;
  limit?: number;
  sort?: EventSortOption;
  order?: EventSortOrder;
};
