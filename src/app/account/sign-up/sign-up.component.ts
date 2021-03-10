import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs/operators';

import { PasswordValidator } from '@app/_validators/password.validator';
import { AccountService, AlertService } from '@app/_services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.validPassword,
          ],
        ],
      },
      { validators: PasswordValidator.doesContainFirstAndLastName }
    );
  }

  get f(): {
    [key: string]: AbstractControl;
  } {
    return this.signUpForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    this.alertService.clear();

    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .register(this.signUpForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Registration successful');
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.alertService.error('Not able to register your account');
          this.loading = false;
        },
      });
  }
}
