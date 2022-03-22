describe('shared-ui: Datepicker component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepicker--primary&args=onStartDateSelect;onEndDateSelect;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Datepicker!');
    });
});
