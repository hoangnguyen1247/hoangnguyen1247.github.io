import { Hoangnguyen1247GithubIoPage } from './app.po';

describe('hoangnguyen1247.github.io App', () => {
  let page: Hoangnguyen1247GithubIoPage;

  beforeEach(() => {
    page = new Hoangnguyen1247GithubIoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
