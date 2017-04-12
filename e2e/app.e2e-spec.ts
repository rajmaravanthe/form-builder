import { FormReactiveValidPage } from './app.po';

describe('form-reactive-valid App', function() {
  let page: FormReactiveValidPage;

  beforeEach(() => {
    page = new FormReactiveValidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
