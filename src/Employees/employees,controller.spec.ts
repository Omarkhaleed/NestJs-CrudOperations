import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { EmployeeService } from './employees.service';
import { Employee } from './Interfaces/employee.interface';
import { Model } from 'mongoose'; // Import Model from mongoose
describe('EmployeesController', () => {
  let controller: EmployeesController;
  let service: EmployeeService;
  let employeeModel: Model<Employee>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        EmployeeService,
        {
          provide: 'EMPLOYEE_MODEL',
          useValue: employeeModel,
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
    controller = module.get<EmployeesController>(EmployeesController);
  });

  describe('findOne', () => {
    it('should find an employee by a given id and return its data', async () => {
      //arrange
      const employeeId = '66439b1956c85d92739f6752';
      const employeeMock = {
        _id: '66439b1956c85d92739f6752',
        name: 'Omar Khalid',
        email: 'Omarkhalid@gmail.com',
        country: 'Egypt',
      } as Employee;

      jest.spyOn(service, 'findEmployeeById').mockResolvedValue(employeeMock);

      //act
      const result = await service.findEmployeeById(employeeId);

      //assert
      expect(await controller.findOne(employeeId)).toBe(employeeMock);
    });
  });

  describe('Find', () => {
    it('should return an array of employees', async () => {
      // Arrange
      const employeesMock = [
        {
          _id: '66439b1956c85d92739f6752',
          name: 'Omar Khalid',
          email: 'Omarkhalid@gmail.com',
          country: 'Egypt',
        } as Employee,
        {
          _id: '66439b1956c85d92739f6752',
          name: 'Omar Khalid',
          email: 'Omarkhalid@gmail.com',
          country: 'Egypt',
        } as Employee,
      ];

      jest.spyOn(service, 'findEmployees').mockResolvedValue(employeesMock);

      // Act
      const result = await controller.Find();

      // Assert
      expect(result).toBe(employeesMock);
    });
  });

  describe('Create', () => {
    it('should create a new employee', async () => {
      // Arrange
      const createEmployeeDto = {
        name: 'Omar Khalid',
        email: 'Omarkhalid@gmail.com',
        country: 'Egypt',
      } as Employee;
      const createdEmployeeMock = {
        _id: '66439b1956c85d92739f6752',
        ...createEmployeeDto,
      };
      jest.spyOn(service, 'addEmployee').mockResolvedValue(createEmployeeDto);

      // Act
      const result = await controller.Create(createEmployeeDto);

      // Assert
      expect(result).toBe(createdEmployeeMock);
    });
  });

  describe('Update', () => {
    it('should update an existing employee', async () => {
      // Arrange
      const employeeId = '66439b1956c85d92739f6752';
      const updateEmployeeDto = {
        name: 'Omar Khalid',
        email: 'Omarkhalid@gmail.com',
        country: 'Egypt',
      } as Employee;
      const updatedEmployeeMock = {
        _id: '66439b1956c85d92739f6752',
        ...updateEmployeeDto,
      };
      jest
        .spyOn(service, 'updateEmployee')
        .mockResolvedValue(updateEmployeeDto);

      // Act
      const result = await controller.Update(employeeId, updateEmployeeDto);

      // Assert
      expect(result).toBe(updatedEmployeeMock);
    });
  });

  describe('Remove', () => {
    it('should remove an existing employee', async () => {
      // Arrange
      const employeeId = '66439b1956c85d92739f6752';
      jest.spyOn(service, 'deleteEmployee').mockResolvedValue(undefined);

      // Act
      const result = await controller.Remove(employeeId);

      // Assert
      expect(result).toBe(undefined);
    });
  });
});
