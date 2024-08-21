import { Controller, Post, Body, InternalServerErrorException, Get, Param } from '@nestjs/common';
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

    @Get()
  async getAll() {
    try {
      return await this.studentsService.getAll();
    } catch (error) {
      console.error('Error in findAll:', error.message, error.stack);
      throw new InternalServerErrorException('Failed to retrieve students');
    }
  }

    @Get(':id')
  async getById(@Param('id') id: number) {
    try {
      return await this.studentsService.getById(id);
    } catch (error) {
      console.error('Error in findOne:', error);
      throw new InternalServerErrorException('Failed to retrieve student');
    }
  }
}
