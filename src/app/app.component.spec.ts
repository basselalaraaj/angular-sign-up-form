import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountModule, HttpClientModule],
      declarations: [AppComponent, AlertComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-signup'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-signup');
  });
});
