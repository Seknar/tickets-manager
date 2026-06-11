import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TicketsController } from './tickets/tickets.controller';
import { AppService } from './app.service';
import { TicketsService } from './tickets/tickets.service';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [AppController, TicketsController],
  providers: [AppService, TicketsService],
})
export class AppModule {}
