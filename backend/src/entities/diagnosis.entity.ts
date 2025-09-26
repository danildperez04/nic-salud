import { Column, Entity, ManyToMany, ManyToOne, OneToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Doctor } from './doctor.entity';
import { Disease, Allergy, MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';
import { Treatment } from './treatment.entity';

@Entity()
export class Diagnosis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  notes: string;

  @Column()
  date: Date;

  // Relationships

  @ManyToOne(() => Doctor, (doctor) => doctor.diagnoses)
  doctor: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.diagnoses)
  patient: Patient;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.diagnoses)
  medicalRecord: MedicalRecord;

  @ManyToOne(() => Appointment, (appointment) => appointment.diagnoses)
  appointment: Appointment;

  // One diagnosis can have multiple diseases and allergies
  @ManyToMany(() => Disease)
  @JoinTable()
  disease: Disease[];

  @ManyToMany(() => Allergy)
  @JoinTable()
  allergies: Allergy[];

  // One diagnosis can have multiple treatments
  @OneToMany(() => Treatment, (t) => t.diagnosis)
  treatments: Treatment[];
}