import { EmployeeService } from './employees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEmployeeDto } from './DTOs/create-employee.dto';
import { UpdateEmployeeDto } from './DTOs/update-employee.dto';
import { Employee } from './Interfaces/employee.interface';

@Controller('Employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findEmployeeById(id);
  }

  @Get()
  async Find(): Promise<Employee[]> {
    return this.employeeService.findEmployees();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  async Create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.addEmployee(createEmployeeDto);
  }

  @Patch(':id')
  async Update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(ValidationPipe) updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return await this.employeeService.updateEmployee(id, updateEmployeeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async Remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}
