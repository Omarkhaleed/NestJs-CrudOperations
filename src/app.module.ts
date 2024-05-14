import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './Employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Company'),
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
