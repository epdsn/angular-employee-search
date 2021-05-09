import { TestBed } from '@angular/core/testing';

import { EmployeesMockService } from './employees.mock.service';

describe('EmployeesService', () => {
  let service: EmployeesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
