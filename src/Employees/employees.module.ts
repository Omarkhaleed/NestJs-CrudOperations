import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeeService } from './employees.service';
import { DatabaseModule } from './database.module';
import { EmployeesProviders } from './employees.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [EmployeeService, ...EmployeesProviders],
})
export class EmployeesModule {}
