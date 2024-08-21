import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Student } from '../entity/student.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentRepository extends Repository<Student> {
    getById(arg0: { where: { id: number; }; }) {
      throw new Error('Method not implemented.');
    }
    constructor(private dataSource: DataSource) {
        super(Student, dataSource.createEntityManager());
    }
}