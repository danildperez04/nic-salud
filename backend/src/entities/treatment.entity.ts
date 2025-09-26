import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Diagnosis } from './diagnosis.entity';
import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';
// Medication is declared in this file

@Entity()
export class Treatment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  notes: string;

  @Column()
  dosage: string;

  @Column()
  duration: string;

  @Column()
  date: Date;

  // Relationships
  @ManyToOne(() => Diagnosis, (diagnosis) => diagnosis.treatments)
  diagnosis: Diagnosis;

  @ManyToOne(() => Patient, (patient) => patient.treatments)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.treatments)
  doctor: Doctor;

  @ManyToOne(() => MedicalRecord, (mr) => mr.treatments)
  medicalRecord: MedicalRecord;

  @ManyToOne(() => Medication, (med) => med.treatments)
  medication: Medication;
}

@Entity()
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Treatment, (t) => t.medication)
  treatments: Treatment[];
}