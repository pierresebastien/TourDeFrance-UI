import { TouDeFrancePage } from './app.po';

describe('tour-de-france-ui App', () => {
  let page: TouDeFrancePage;

  beforeEach(() => {
    page = new TouDeFrancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tdf works!');
  });
});
