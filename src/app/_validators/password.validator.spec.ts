import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

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
  });
});
