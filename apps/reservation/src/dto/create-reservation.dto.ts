import { IsNotEmpty, IsString } from 'class-validator';
import { type } from 'os';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  start_date: string;
  @IsNotEmpty()
  @IsString()
  end_date: string;
  @IsNotEmpty()
  @IsString()
  place_id: string;
  @IsNotEmpty()
  @IsString()
  invoice_id: string;
}
