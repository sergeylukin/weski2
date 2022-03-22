describe('shared-ui: UiShared component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uishared--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiShared!');
    });
});
