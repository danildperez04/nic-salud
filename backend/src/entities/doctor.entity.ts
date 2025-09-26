import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Municipality } from './department.entity';
import { Appointment } from './appointment.entity';
import { User } from './user.entity';
import { Diagnosis } from './diagnosis.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  code: string;

  @Column({
    unique: true
  })
  dni: string;

  @Column()
  fullname: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDate: Date;

  // Relationships

  @OneToOne(() => User, (user) => user.doctor)
  @JoinColumn()
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.doctor)
  @JoinColumn()
  diagnoses: Diagnosis[];

  @ManyToOne(() => Municipality, (municipality) => municipality.doctors)
  @JoinColumn()
  municipality: Municipality;

  @ManyToMany(() => Specialty, (specialty) => specialty.doctors)
  @JoinTable()
  specialties: Specialty[];
}

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relationships

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  doctors: Doctor[];
}