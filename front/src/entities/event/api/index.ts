import useSWR from 'swr';
import { fetcher } from 'shared/api';
import { IEvent, EventQuery, EventQueryResult } from '../model';

export const getEvents = ({ page = 1, limit = 10, sort, order }: EventQuery) =>
  useSWR<EventQueryResult>(
    `http://localhost:3000/events?page=${page}&limit=${limit}` +
      (sort && order && sort != 'nothing'
        ? `&sort=${sort}&order=${order}`
        : ''),
    fetcher
  );

export const getEventById = (eventId: Id) =>
  useSWR<IEvent>(`http://localhost:3000/events/${eventId}`, fetcher);
