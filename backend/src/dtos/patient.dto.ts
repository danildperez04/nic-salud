import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  dni: string;

  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: string;

  @IsOptional()
  municipalityId?: number;

  @IsOptional()
  userId?: number;
}

export class UpdatePatientDto {
  @IsOptional()
  @IsString()
  dni?: string;

  @IsOptional()
  @IsString()
  fullname?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  municipalityId?: number;

  @IsOptional()
  userId?: number;
}
