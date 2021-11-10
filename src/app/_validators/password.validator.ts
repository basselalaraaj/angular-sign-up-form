import { AbstractControl } from '@angular/forms';
export class PasswordValidator {
  static validPassword(
    fc: AbstractControl
  ): {
    passwordCase: boolean;
  } | null {
    const hasUpper = /[A-Z]/.test(fc.value);
    const hasLower = /[a-z]/.test(fc.value);

    if (!fc.value) {
      return null;
    }

    if (!hasLower || !hasUpper) {
      return { passwordCase: true };
    }

    return null;
  }

  static doesContainFirstAndLastName(
    fc: AbstractControl
  ): {
    passwordContainsName: boolean;
  } | null {
    const firstName = fc.get('firstName')?.value;
    const lastName = fc.get('lastName')?.value;
    const password = fc.get('password')?.value;

    if (!firstName || !lastName || !password) {
      return null;
    }

    const containsFirstName = password.includes(firstName);
    const containsLastName = password.includes(lastName);

    if (containsFirstName || containsLastName) {
      fc.get('password')?.setErrors({ passwordContainsName: true });
      return { passwordContainsName: true };
    }

    return null;
  }
}
