import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.get('/');
  }
  
  get title() {
    return element(by.css('app-root h1')).getText();
  }

  get toggleButton() {
    return element(by.tagName('button'));
  }

  get alertMessage() {
    const el = element(by.className('message-body'));
    return el ? el.getText() : null;
  }
}
