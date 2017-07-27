import { Website20170322Page } from './app.po';

describe('website20170322 App', () => {
  let page: Website20170322Page;

  beforeEach(() => {
    page = new Website20170322Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
