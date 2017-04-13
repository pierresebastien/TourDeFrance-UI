import { TourDeFrancePage } from './app.po';

describe('tour-de-france-ui App', () => {
  let page: TourDeFrancePage;

  beforeEach(() => {
    page = new TourDeFrancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tdf works!');
  });
});
