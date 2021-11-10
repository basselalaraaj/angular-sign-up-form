import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SignUpComponent } from './sign-up.component';
import { AccountService } from '@app/_services';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let accountService: AccountService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignUpComponent],
        imports: [ReactiveFormsModule, HttpClientTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    accountService = fixture.debugElement.injector.get(AccountService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if first name is valid', () => {
    const firstName = component.signUpForm.controls['firstName'];
    expect(firstName.errors?.['required']).toBeTruthy();
    firstName.setValue('John');

    expect(firstName.errors?.['required']).toBeFalsy();
  });

  it('should check if last name is valid', () => {
    const lastName = component.signUpForm.controls['lastName'];
    expect(lastName.errors?.['required']).toBeTruthy();
    lastName.setValue('Peter');

    expect(lastName.errors?.['required']).toBeFalsy();
  });

  it('should check if email is valid', () => {
    const email = component.signUpForm.controls['email'];
    expect(email.errors?.['required']).toBeTruthy();

    email.setValue('John Peter');

    expect(email.errors?.['pattern']).toBeDefined();
    expect(email.errors?.['email']).toBeTruthy();

    email.setValue('test@test.nl');

    expect(email.errors?.['required']).toBeFalsy();
    expect(email.errors?.['pattern']).toBeUndefined();
    expect(email.errors?.['email']).toBeFalsy();
  });

  it('should check if password is valid', () => {
    const password = component.signUpForm.controls['password'];
    expect(password.errors?.['required']).toBeTruthy();

    password.setValue('a');

    expect(password.errors?.['minlength']).toBeDefined();
    expect(password.errors?.['passwordCase']).toBeTruthy();

    password.setValue('Pa$$word');

    expect(password.errors).toBeNull();
  });

  it('should check form is submitted', () => {
    component.signUpForm.controls['firstName'].setValue('John');
    component.signUpForm.controls['lastName'].setValue('Peter');
    component.signUpForm.controls['email'].setValue('test@test.nl');
    component.signUpForm.controls['password'].setValue('Pa$$word');
    fixture.detectChanges();

    const observable = new Observable<object>((subscriber) => {
      subscriber.next({});
    });

    spyOn(accountService, 'register').and.returnValue(observable);
    component.onSubmit();

    fixture.detectChanges();

    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });

  it('should check if submitted form is invalid', () => {
    component.signUpForm.controls['firstName'].setValue('John');
    component.signUpForm.controls['lastName'].setValue('Peter');
    component.signUpForm.controls['email'].setValue('test@test.nl');
    fixture.detectChanges();

    component.onSubmit();

    fixture.detectChanges();
    expect(component.loading).toBeFalse();
  });

  it('should alert an error if submitted form throws an error', () => {
    component.signUpForm.controls['firstName'].setValue('John');
    component.signUpForm.controls['lastName'].setValue('Peter');
    component.signUpForm.controls['email'].setValue('test@test.nl');
    component.signUpForm.controls['password'].setValue('Pa$$word');
    fixture.detectChanges();

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    const observable = new Observable<object>((subscriber) => {
      subscriber.error(errorResponse);
    });

    spyOn(accountService, 'register').and.returnValue(observable);
    component.onSubmit();

    fixture.detectChanges();

    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeFalse();
  });
});
