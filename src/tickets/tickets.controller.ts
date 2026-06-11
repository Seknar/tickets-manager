import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { type TicketStatus } from './entities/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  findAll(@Query('status') status?: TicketStatus) {
    return this.ticketsService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ticketsService.findOne(+id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body() updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketsService.updateStatus(+id, updateTicketStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ticketsService.remove(+id);
  }
}
