// cypress/integration/my_test.js
require('cypress-xpath')
describe('Teste com dados do Excel', () => {
    beforeEach(() => {
        cy.LoginTeste()
        cy.viewport(1280, 720);
       
      });

      it('Lê dados do Excel e os usa nos testes', () => {
        cy.iframe_1_testeExcel()
        
      });
    
   });