Cypress.Commands.add('iframe_1_PublicVaga', () => {
    cy.get('.header-add-object-button').click()
    cy.get('.search-box > .ng-pristine').should('be.visible').type('ticket{enter}')
    cy.wait(3000)
    cy.get('.menu-container > :nth-child(1)').should('be.visible').click()
    cy.get('sy-slot#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe').then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Verifica se o iframe interno está completamente carregado
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
            cy.wrap(iframeDocument.body).within(() => {
                cy.wait(2000)
                cy.get('.ui-dropdown').click({force:true})
 
                
            });
        });
    });
});