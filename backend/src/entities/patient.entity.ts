import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';
import { Appointment } from './appointment.entity';
import { Municipality } from './department.entity';
import { User } from './user.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

  @OneToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.patient)
  medicalRecord: MedicalRecord;

  appointments: Appointment[];

  @ManyToOne(() => Municipality, (municipality) => municipality.patients)
  @JoinColumn()
  municipality: Municipality;

  @OneToOne(() => User, (user) => user.patient)
  @JoinColumn()
  user: User;
}