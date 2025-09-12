import { Appointment } from './appointment.entity';
import { ClinicalHistory } from './clinical-history.entity';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';
import { Treatment } from './treatment.entity';

export class MedicalRecord {
  id: number;
  code: string;
  bloodType: string;

  //Relationships
  patient: Patient;
  doctor: Doctor;
  diseases: Disease[];
  allergies: Allergy[];
  surgeries: Surgery[];
  appointments: Appointment[];
  treatments: Treatment[];
  vaccines: Vaccine[]
  clinicalHistories: ClinicalHistory[];
}

export class Vaccine {
  id: number;
  name: string;
  description: string;
}


export class Allergy {

}

export class Disease {

}

export class Surgery {

}