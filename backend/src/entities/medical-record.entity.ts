import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Appointment } from './appointment.entity';
import { ClinicalHistory } from './clinical-history.entity';
import { Patient } from './patient.entity';
import { Treatment } from './treatment.entity';
import { Diagnosis } from './diagnosis.entity';
import { LabTest } from './lab-test.enity';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  bloodType: string;

  // Managemanet Fields
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //Relationships

  @OneToOne(() => Patient, (patient) => patient.medicalRecord)
  @JoinColumn()
  patient: Patient;

  @OneToMany(() => PatientDisease, (patientDisease) => patientDisease.medicalRecord)
  patientDiseases: PatientDisease[];

  @OneToMany(() => Allergy, (allergy) => allergy.medicalRecord)
  patientAllergies: Allergy[];

  @OneToMany(() => Surgery, (surgery) => surgery.medicalRecord)
  surgeries: Surgery[];

  @OneToMany(() => Appointment, (appointment) => appointment.medicalRecord)
  appointments: Appointment[];

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.medicalRecord)
  diagnoses: Diagnosis[];

  @OneToMany(() => Treatment, (treatment) => treatment.medicalRecord)
  treatments: Treatment[];

  @OneToMany(() => Vaccine, (vaccine) => vaccine.medicalRecord)
  vaccines: Vaccine[];

  @OneToMany(() => LabTest, (labTest) => labTest.medicalRecord)
  labTests: LabTest[];

  @OneToMany(() => ClinicalHistory, (ch) => ch.medicalRecord)
  clinicalHistories: ClinicalHistory[];
}

@Entity()
export class Disease {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // Relationships

  @OneToMany(() => PatientDisease, (patientDisease) => patientDisease.disease)
  patientDiseases: PatientDisease[];
}

//
@Entity()
export class PatientDisease {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // Relationships

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.patientDiseases)
  medicalRecord: MedicalRecord;

  @ManyToOne(() => Disease, (disease) => disease.patientDiseases)
  disease: Disease;
}

// Catalogs

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.vaccines)
  medicalRecord: MedicalRecord;
}

@Entity()
export class Allergy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.patientAllergies)
  medicalRecord: MedicalRecord;
}


@Entity()
export class Surgery {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.surgeries)
  medicalRecord: MedicalRecord;
}