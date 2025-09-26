import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Entity()
export class ClinicalHistory {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	notes: string;

	@Column()
	date: Date;

	@ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.clinicalHistories)
	medicalRecord: MedicalRecord;
}