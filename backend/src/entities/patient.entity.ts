import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
  medicalHistory: string;
}