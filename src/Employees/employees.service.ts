import { CreateEmployeeDto } from './DTOs/create-employee.dto';
import { UpdateEmployeeDto } from './DTOs/update-employee.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Employee } from './Interfaces/employee.interface';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_MODEL')
    private employee: Model<Employee>,
  ) {}

  async findEmployees(): Promise<Employee[]> {
    return this.employee.find().exec();
  }

  async findEmployeeById(id: string): Promise<Employee> {
    return this.employee.findById(id);
  }

  async addEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = plainToClass(this.employee, createEmployeeDto);
    return employee.save();
  }

  async updateEmployee(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = plainToClass(this.employee, updateEmployeeDto);
    return this.employee.findByIdAndUpdate(id, employee);
  }

  async deleteEmployee(id: string): Promise<Employee> {
    return this.employee.findByIdAndDelete(id);
  }
}
