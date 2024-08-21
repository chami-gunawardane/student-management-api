import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("student")
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName?: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  nic: string;

  @Column()
  tel: string;
}
