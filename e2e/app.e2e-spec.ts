import { SocialSlyPage } from './app.po';

describe('social-sly App', () => {
  let page: SocialSlyPage;

  beforeEach(() => {
    page = new SocialSlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
