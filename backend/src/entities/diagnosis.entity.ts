import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Doctor } from './doctor.entity';
import { Allergy, Disease, MedicalRecord } from './medical-record.entity';
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

  patient: Patient;
  medicalRecord: MedicalRecord;
  appointment: Appointment;
  disease: Disease[];
  allergies: Allergy[];
  treatment: Treatment;
}