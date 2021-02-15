import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class AccountModule {}
