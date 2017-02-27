import { ProvideJqueryPage } from './app.po';

describe('provide-jquery App', () => {
  let page: ProvideJqueryPage;

  beforeEach(() => {
    page = new ProvideJqueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
