import { Connection } from 'mongoose';
import { EmployeeSchema } from './Schemas/employees.schema';

export const EmployeesProviders = [
  {
    provide: 'EMPLOYEE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Employee', EmployeeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
