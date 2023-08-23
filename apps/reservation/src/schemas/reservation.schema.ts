import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  time_stamp: Date;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;

  @Prop()
  user_id: string;

  @Prop()
  place_id: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
