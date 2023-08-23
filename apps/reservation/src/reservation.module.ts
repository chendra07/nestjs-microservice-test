import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ReservationRepository } from './reservation.repository';
import {
  ReservationDocument,
  ReservationSchema,
} from './schemas/reservation.schema';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    SharedModule,
    LoggerModule,
  ],
  controllers: [ReservationController],
  providers: [ReservationService, ReservationRepository],
})
export class ReservationModule {}
