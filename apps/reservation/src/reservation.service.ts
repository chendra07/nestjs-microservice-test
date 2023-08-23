import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservation.repository';
import { parseDate } from './shared/utils/dateUtils';

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}
  async create(createReservationDto: CreateReservationDto) {
    return await this.reservationRepository.create({
      ...createReservationDto,
      start_date: parseDate(createReservationDto.start_date),
      end_date: parseDate(createReservationDto.end_date),
      time_stamp: new Date(),
      user_id: '123',
    });
  }

  async findAll() {
    return await this.reservationRepository.find({});
  }

  async findOne(id: string) {
    return await this.reservationRepository.findOne({ _id: id });
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return await this.reservationRepository.findOneAndUpdate(
      { _id: id },
      { $set: updateReservationDto },
    );
  }

  async remove(id: string) {
    return await this.reservationRepository.findOneAndDelete({ _id: id });
  }
}
