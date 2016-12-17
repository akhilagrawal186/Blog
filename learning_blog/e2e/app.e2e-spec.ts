import { LearningBlogPage } from './app.po';

describe('learning-blog App', function() {
  let page: LearningBlogPage;

  beforeEach(() => {
    page = new LearningBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
