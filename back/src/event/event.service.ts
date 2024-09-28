import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventSortOption, EventSortOrder } from './dto/queryEvents.dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async amountOfEvents() {
    return await this.prisma.event.count();
  }

  async getEvents(
    page = 1,
    limit = 10,
    sort?: EventSortOption,
    order?: EventSortOrder,
  ) {
    return await this.prisma.event.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { [sort]: order },
    });
  }

  async getEventById(eventId: number) {
    return await this.prisma.event.findUnique({ where: { id: eventId } });
  }

  async getEventParticipants(eventId: number) {
    return await this.prisma.participant.findMany({
      where: { events: { every: { id: { equals: eventId } } } },
    });
  }

  async registerParticipant(
    eventId: number,
    data: Prisma.ParticipantCreateInput,
  ) {
    return await this.prisma.participant.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        birthDate: data.birthDate,
        source: data.source,
        events: {
          connect: { id: eventId },
        },
      },
    });
  }
}
