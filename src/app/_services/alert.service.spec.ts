import { TestBed } from '@angular/core/testing';
import { Alert } from '@app/_models';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the success alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.success('test message');
    expect(alert.calls.count()).toEqual(1);
  });

  it('should test the error alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.error('test message');
    expect(alert.calls.count()).toEqual(1);
  });

  it('should test the alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    const alertMessage = new Alert({ message: 'test message' });
    service.alert(alertMessage);
    expect(alert.calls.count()).toEqual(1);
  });

  it('should test the clear alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.clear();
    expect(alert.calls.count()).toEqual(1);
  });
});
