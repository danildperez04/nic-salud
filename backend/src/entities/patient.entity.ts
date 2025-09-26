import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';
import { Appointment } from './appointment.entity';
import { Municipality } from './department.entity';
import { User } from './user.entity';
import { Diagnosis } from './diagnosis.entity';
import { Treatment } from './treatment.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dni: string;

  @Column()
  fullname: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDate: Date;

  @Column({ default: true })
  isActive: boolean;

  // Relationships

  @OneToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.patient)
  medicalRecord: MedicalRecord;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.patient)
  diagnoses: Diagnosis[];

  @OneToMany(() => Treatment, (t) => t.patient)
  treatments: Treatment[];

  @ManyToOne(() => Municipality, (municipality) => municipality.patients)
  @JoinColumn()
  municipality: Municipality;

  @OneToOne(() => User, (user) => user.patient)
  @JoinColumn()
  user: User;
}