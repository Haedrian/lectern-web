import { ScandalPage } from './app.po';

describe('scandal App', () => {
  let page: ScandalPage;

  beforeEach(() => {
    page = new ScandalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
