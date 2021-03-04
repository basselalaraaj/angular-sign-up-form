import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async setFirstNameInput(): Promise<void> {
    return element(by.css('input[formControlName="firstName"]')).sendKeys(
      'Peter'
    );
  }

  async setLastNameInput(): Promise<void> {
    return element(by.css('input[formControlName="lastName"]')).sendKeys(
      'John'
    );
  }

  async setEmailInput(): Promise<void> {
    return element(by.css('input[formControlName="email"]')).sendKeys(
      'info@example.com'
    );
  }

  async setPasswordInput(): Promise<void> {
    return element(by.css('input[formControlName="password"]')).sendKeys(
      'Pa$$word!'
    );
  }

  async clickSubmitButton(): Promise<void> {
    return element(by.css('.btn-primary')).click();
  }

  async getSuccessMessage(): Promise<string> {
    return element(by.css('.alert-message')).getText();
  }
}
