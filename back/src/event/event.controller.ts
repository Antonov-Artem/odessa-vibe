import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { EventQuery } from './dto/queryEvents.dto';
import { Prisma } from '@prisma/client';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getEvents(@Query() { page, limit, sort, order }: EventQuery) {
    const amountOfEvents = await this.eventService.amountOfEvents();

    const events = await this.eventService.getEvents(
      Number(page),
      Number(limit),
      sort,
      order,
    );

    const hasMore = amountOfEvents - events.length > 0;

    return {
      hasMore,
      page,
      limit,
      events,
    };
  }

  @Get(':id')
  async getEventById(@Param('id') eventId: string) {
    return await this.eventService.getEventById(Number(eventId));
  }

  @Get(':id/participants')
  async getEventParticipants(@Param('id') eventId: string) {
    return await this.eventService.getEventParticipants(Number(eventId));
  }

  @Post(':id')
  async registerParticipant(
    @Param('id') eventId: string,
    @Body() data: Prisma.ParticipantCreateInput,
  ) {
    return await this.eventService.registerParticipant(Number(eventId), data);
  }
}
