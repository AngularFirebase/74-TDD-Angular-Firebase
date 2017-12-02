import { AppPage } from './app.po';

describe('My Awesome App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.title).toEqual('Alert Button');
  });

  it('should not display the alert message', () => {
    expect(page.alertMessage).toBeFalsy();
  });

  it('should display the alert message after clicking toggle button', () => {
    const btn = page.toggleButton;
    let content = page.alertMessage;

    expect(btn).toBeDefined();  
    expect(content).toBeFalsy();  
    
    btn.click();

    content = page.alertMessage;
    expect(content).toContain('warn');  
  });
});


