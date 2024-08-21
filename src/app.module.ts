import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/module/students.module';
import { Student } from './students/entity/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'student_db',
      autoLoadEntities: true,
      synchronize: false,
      entities: ['dist/src/**/*.entity{.ts,.js}'],
    }),
    StudentsModule,
  ],
})
export class AppModule { }
