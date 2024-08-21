import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from '../repository/student.repository';
import { CreateStudentDto } from '../dto/create-student.dto';
import { Student } from '../entity/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentRepository)
    private readonly studentRepository: StudentRepository,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      const student = this.studentRepository.create(createStudentDto);
      return await this.studentRepository.save(student);
    } catch (error) 
  {
      console.log('Error creating student:', error);
      throw new InternalServerErrorException('Failed to create student');
    }
  }
}

  