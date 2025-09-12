import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';

export class Appointment {
  date: Date;
  subject: string;

  // Relationships
  patient: Patient;
  doctor: Doctor;
  medicalRecord: MedicalRecord;
}