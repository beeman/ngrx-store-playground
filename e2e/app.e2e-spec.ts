import { NgrxStorePlaygroundPage } from './app.po';

describe('ngrx-store-playground App', function() {
  let page: NgrxStorePlaygroundPage;

  beforeEach(() => {
    page = new NgrxStorePlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
