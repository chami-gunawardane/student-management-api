import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from '../service/students.service';
import { StudentsController } from '../controller/students.controller';
import { StudentRepository } from '../repository/student.repository';
import { Student } from '../entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService, StudentRepository],
})
export class StudentsModule { }
