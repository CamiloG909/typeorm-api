import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: false,
	})
	first_name: string;

	@Column({
		nullable: false,
	})
	last_name: string;

	@Column({
		default: true
	})
	active: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
