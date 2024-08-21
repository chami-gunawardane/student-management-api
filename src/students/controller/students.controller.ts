import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { StudentsService } from '../service/students.service';
import { CreateStudentDto } from '../dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    try {
      return await this.studentsService.create(createStudentDto);
    } catch (error) {
      console.error('Error in create:', error);
      throw new InternalServerErrorException('Failed to create student');
    }
  }
}
