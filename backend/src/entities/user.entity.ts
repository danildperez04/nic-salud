import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  username: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  twoFAEnabled: boolean;
  twoFACode: string;
  twoFACodeExpiresAt: Date;

  // Relationships

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn()
  role: Role;

  @OneToOne(() => Doctor, (doctor) => doctor.user)
  doctor: Doctor;

  @OneToOne(() => Patient, (patient) => patient.user)
  patient: Patient;
}

export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relationships

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

/** TODO: Finish entities
 * 
 */