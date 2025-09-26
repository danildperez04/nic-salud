
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Entity()
export class LabTest {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	result: string;

	@Column()
	date: Date;

	@ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.labTests)
	medicalRecord: MedicalRecord;
}