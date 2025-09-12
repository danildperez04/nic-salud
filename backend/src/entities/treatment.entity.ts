import { Diagnosis } from './diagnosis.entity';
import { Doctor } from './doctor.entity';
import { MedicalRecord } from './medical-record.entity';
import { Patient } from './patient.entity';

export class Treatment {
  id: number;
  notes: string;
  doseage: string;
  duration: Date;
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