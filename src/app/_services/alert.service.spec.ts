import { TestBed } from '@angular/core/testing';
import { Alert } from '@app/_models';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  const testMessage = 'test message';

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the success alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.success(testMessage);
    expect(alert.calls.count()).toEqual(1);
    expect(alert.calls.mostRecent().args[0].message).toEqual(testMessage);
  });

  it('should test the error alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.error(testMessage);
    expect(alert.calls.count()).toEqual(1);
    expect(alert.calls.mostRecent().args[0].message).toEqual(testMessage);
  });

  it('should test the alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    const alertMessage = new Alert({ message: testMessage });
    service.alert(alertMessage);
    expect(alert.calls.count()).toEqual(1);
    expect(alert.calls.mostRecent().args[0].message).toEqual(testMessage);
  });

  it('should test the clear alert', () => {
    const alert = jasmine.createSpy('alert');
    service.onAlert().subscribe((x) => {
      alert(x);
    });
    service.clear();
    expect(alert.calls.count()).toEqual(1);
    expect(alert.calls.mostRecent().args[0].id).toEqual('default-alert');
  });
});
