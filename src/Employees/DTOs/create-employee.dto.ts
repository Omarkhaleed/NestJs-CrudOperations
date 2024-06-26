import { IsEmail, IsString, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @Length(3, 20)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly country: string;
}
