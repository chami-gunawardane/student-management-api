import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Student } from '../entity/student.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentRepository extends Repository<Student> {
    constructor(private dataSource: DataSource) {
        super(Student, dataSource.createEntityManager());
    }
}