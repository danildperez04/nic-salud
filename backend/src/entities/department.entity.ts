import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './patient.entity';
import { Doctor } from './doctor.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relationships

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}

@Entity()
export class Municipality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relationships

  @ManyToOne(() => Department, (department) => department.municipalities)
  @JoinColumn()
  department: Department;

  @OneToMany(() => Doctor, (doctor) => doctor.municipality)
  doctors: Doctor[];

  @OneToMany(() => Patient, (patient) => patient.municipality)
  patients: Patient[];
}