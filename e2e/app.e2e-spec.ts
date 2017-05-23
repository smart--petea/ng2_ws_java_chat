import { AngSockPage } from './app.po';

describe('ang-sock App', () => {
  let page: AngSockPage;

  beforeEach(() => {
    page = new AngSockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
