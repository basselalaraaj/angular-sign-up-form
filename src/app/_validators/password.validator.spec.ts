import { FormControl, FormBuilder } from '@angular/forms';

import { PasswordValidator } from './password.validator';

describe('PasswordValidator.', () => {
  describe('validPassword.', () => {
    it('should not error on empty values', () => {
      expect(PasswordValidator.validPassword(new FormControl())).toBeNull();
    });
    it('should not error on lower and upper values', () => {
      expect(
        PasswordValidator.validPassword(new FormControl('TESTtest'))
      ).toBeNull();
    });
    it('should error on missing lower case', () => {
      expect(PasswordValidator.validPassword(new FormControl('TEST'))).toEqual({
        passwordCase: true,
      });
    });
    it('should error on missing upper case', () => {
      expect(PasswordValidator.validPassword(new FormControl('lower'))).toEqual(
        {
          passwordCase: true,
        }
      );
    });
    it('should error if contains first or last name', () => {
      const fb = new FormBuilder();
      expect(
        PasswordValidator.doesContainFirstAndLastName(
          fb.group(
            {
              firstName: ['John'],
              lastName: ['Peter'],
              password: ['JohnPeter'],
            },
            { validators: PasswordValidator.doesContainFirstAndLastName }
          )
        )
      ).toEqual({
        passwordContainsName: true,
      });
    });
  });
});
