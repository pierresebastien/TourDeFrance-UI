import { browser, element, by } from 'protractor';

export class TourDeFrancePage {
  navigateTo(): any {
    return browser.get('/');
  }

  getParagraphText(): any {
    return element(by.css('tdf-root h1')).getText();
  }
}
