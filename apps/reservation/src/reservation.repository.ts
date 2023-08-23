import { AbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common/decorators';
import { ReservationDocument } from './schemas/reservation.schema';
import { Logger } from '@nestjs/common/services';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
