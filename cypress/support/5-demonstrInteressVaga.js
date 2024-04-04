require('cypress-xpath')
Cypress.Commands.add('iframe_1_PosicaoDemoInterVaga', (nome) => {
    cy.wait(5000)
    cy.get('.header-add-object-button', {timeout:20000}).should('be.visible').click()
    cy.wait(5000)
    cy.contains('Todos', {timeout:20000}).should('be.visible').click()
    cy.wait(5000)
    cy.get('.search-box > .ng-pristine', {timeout:20000}).should('be.visible').type('ticket{enter}')
    cy.wait(3000)
    cy.contains('a.creation-menu-item:visible', 'Ticket', {timeout:10000}).should('be.visible').click();
    cy.contains('Sim', {timeout:20000}).should('be.visible').click({force:true})
    cy.get('#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe', {timeout:20000}).then(($iframe) => {
        
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            
            cy.wrap(iframeDocument.body).within(() => {
                cy.wait(3000)
                cy.get('.ui-dropdown-trigger').eq(1).click().log('Click em Seleção');
                cy.wait(3000)
                cy.xpath('/html/body/div[7]/div/div/div/div[1]/div/input').clear().type(nome, {force: true}).type('{enter}');
                cy.contains(nome).click({force:true})
                cy.get('.ui-dropdown-trigger').eq(0).click().log('Click em classificação');
                cy.get('li.ui-dropdown-item').eq(40).click().log('Seleção de Classificação Demonstrar interesse em vaga de estágio');
                cy.wait(1000)
                cy.get('.ui-dropdown-trigger').eq(3).click().log('Click em Seleção');
                
                cy.pause()
                
                
                
                
                
 
                
            });
        });
    });
    cy.screenshot('comprovante de Publicação', { capture: 'fullPage' });
});