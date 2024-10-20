import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  creditcard: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
