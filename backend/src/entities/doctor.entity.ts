import { Entity } from 'typeorm';
import { Specialty } from './speciality.entity';

@Entity()
export class Doctor {
  id: number;
  name: string;
  phone: string;
  email: string;

  specialties: Specialty[];
}