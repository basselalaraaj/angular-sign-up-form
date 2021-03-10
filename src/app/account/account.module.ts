import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class AccountModule {}
