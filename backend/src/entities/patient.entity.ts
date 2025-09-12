import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;
  dni: string;
  fullname: string;
  address: string;
  phoneNumber: string;
  birthDate: Date;
  medicalRecord: MedicalRecord;
}