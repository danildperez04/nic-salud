import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';

@Entity()
export class Appointment {
  subject: string;
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
}