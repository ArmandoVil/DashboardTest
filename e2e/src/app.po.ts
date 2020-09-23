import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root app-header-welcome .header-welcome .mat-icon')).getText() as Promise<string>;
  }

  getProductsTable() {
    return element(by.css('.content table tr th')).getText();
  }
}
