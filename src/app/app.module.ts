import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { AlertComponent } from './_components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule, AccountModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
