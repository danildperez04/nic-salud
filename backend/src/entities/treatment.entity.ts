import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Diagnosis } from './diagnosis.entity';
import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';

export class Treatment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  notes: string;

  @Column()
  doseage: string;

  @Column()
  duration: Date;

  @Column()
  date: Date;

  // Relationships

  diagnosis: Diagnosis;
  medication: Medication;
  patient: Patient;
  doctor: Doctor;
  medicalRecord: MedicalRecord;
}

export class TreatmentMedication {
  id: number;
  doseage: number;
  frecuency: string;
  duration: string;
  notes: string;
  startDate: Date;
  dueDate: Date;

  // Relationships

  medication: Medication;
  treatment: Treatment;
}

export class Medication {
  id: number;
  name: string;
  description: string;
}