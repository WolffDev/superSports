import { SuperSportsPage } from './app.po';

describe('super-sports App', function() {
  let page: SuperSportsPage;

  beforeEach(() => {
    page = new SuperSportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
