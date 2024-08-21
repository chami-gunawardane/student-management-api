import { IsNotEmpty, IsString, IsNumber, IsOptional, Matches } from 'class-validator';
import { validateNic, validateTel } from '../helper/validation.helper';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @Matches(validateNic(), { message: 'Invalid NIC format' })
  @IsNotEmpty()
  nic: string;

  @Matches(validateTel(), { message: 'Invalid telephone number format' })
  @IsNotEmpty()
  tel: string;
}
