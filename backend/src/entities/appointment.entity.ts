import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';
import { Diagnosis } from './diagnosis.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  date: Date;

  // Relationships

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn()
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  @JoinColumn()
  doctor: Doctor;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.appointments)
  @JoinColumn()
  medicalRecord: MedicalRecord;

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.appointment)
  diagnoses: Diagnosis[];
}