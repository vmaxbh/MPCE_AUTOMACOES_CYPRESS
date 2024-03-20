///<reference types="cypress-iframe" />

Cypress.Commands.add('LoginTeste', (usuario = Cypress.env('USERNAME'), senha = Cypress.env('PASSWORD')) => {
    cy.visit('/');
    cy.get('#login').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.sy-btn').click();
    cy.wait(10000); 
    cy.get('.sy-title-column > .sy-btn').should('exist').log('Componente Confirmado na tela Inicial')

});

Cypress.Commands.add('navExplorerEstagiariosCanditado', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239e > .view > .view-content > iframe').then(($iframe) => {
        
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        
        cy.wrap(iframeDocument.body).within(() => {
            
            cy.get('input[title="Filtrar por nome"]').should('be.visible').clear().type('Estagiários{enter}');
            cy.log('Valor inserido com sucesso no campo de pesquisa! clicado enter');
            cy.wait(3000);
            cy.contains('span', 'Candidato').scrollIntoView().should('be.visible').click();
            cy.log('Campo Candidato clicado com sucesso dentro do iframe!')
        });
    });
});




