import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Alert, AlertType } from '@app/_models';
import { AlertService } from '@app/_services';
import { By } from '@angular/platform-browser';

import { AlertComponent } from './alert.component';
import { DebugElement } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;

  const alert = {
    type: AlertType.Error,
    message: 'Was added successfully.',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [AlertService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alertService = fixture.debugElement.injector.get(AlertService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the alert from the service', () => {
    alertService.success(alert.message);
    fixture.detectChanges();

    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('span');
    expect(p?.textContent).toEqual(alert.message);
  });

  it('should remove the alert message', async () => {
    alertService.success(alert.message);
    fixture.detectChanges();

    const alertElement: HTMLElement = fixture.nativeElement;
    let alertMessage = alertElement.querySelector('span');
    expect(alertMessage?.textContent).toEqual(alert.message);

    const buttonElement = fixture.debugElement.query(By.css('.close'));

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    alertMessage = alertElement.querySelector('span');
    expect(alertMessage?.textContent).toBeUndefined();
  });
});
