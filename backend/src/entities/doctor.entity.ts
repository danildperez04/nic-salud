import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dni: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  email: string;

  specialties: Specialty[];

  municipality: string;
}

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}