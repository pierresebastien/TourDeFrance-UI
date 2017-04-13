import { browser, element, by } from 'protractor';

export class TouDeFrancePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tdf-root h1')).getText();
  }
}
