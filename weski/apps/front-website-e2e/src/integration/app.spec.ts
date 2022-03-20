import { getHotelSearchButton } from '../support/app.po';

describe('gomepage', () => {
  beforeEach(() => cy.visit('/'));

  it('should include hotels list feature', () => {
    cy.contains('FrontWebsiteFeatureHotelsList');
  });

  it('should display list of hotels on search', () => {
    cy.contains('a', 'Some place').within(() => {
      cy.contains('a', 'More details');
    });
    getHotelSearchResults().should((t) => expect(t.length).equal(0));
    getHotelSearchButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
