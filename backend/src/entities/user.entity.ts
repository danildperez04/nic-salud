import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relationships

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

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

  @Column({
    default: true
  })
  isActive: boolean;

  @Column({
    default: true
  })
  twoFAEnabled: boolean;

  @Column({
    nullable: true
  })
  twoFACode: string;

  @Column({
    nullable: true
  })
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

/** TODO: Finish entities
 * 
 */