import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fill in sign up form', async () => {
    await page.navigateTo();
    await page.setFirstNameInput();
    await page.setLastNameInput();
    await page.setEmailInput();
    await page.setPasswordInput();
    await page.clickSubmitButton();
    expect(await page.getSuccessMessage()).toEqual('Registration successful');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
