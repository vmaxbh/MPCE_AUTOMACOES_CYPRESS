require('cypress-xpath')
Cypress.Commands.add('iframe_1_PublicVaga', (nome) => {
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
                cy.wait(4000)
                cy.get('.ui-dropdown-trigger').eq(0).click().log('Click em classificação');
                cy.get('li.ui-dropdown-item').eq(67).click().log('Seleção de Classificação');
                cy.wait(1000)
                cy.get('.ui-dropdown-trigger').eq(1).click().log('Click em classificação');
                cy.wait(3000)
                cy.xpath('/html/body/div[6]/div/div/div/div[1]/div/input').clear().type(nome).type('{enter}');
                cy.wait(3000)
                cy.contains(nome).click({force:true})
                cy.wait(4000)
                cy.contains('Publicação de vagas de estágio').click({force:true});
                cy.get('div.ui-dropdown-trigger.ui-state-default.ui-corner-right').eq(3).should('be.visible').click().log('Click Edital de Seleção');
                cy.get('li.ui-dropdown-item.ui-corner-all').eq(1).click().log('Seleção de Edital de Seleção');
                cy.get('div.ui-dropdown-trigger.ui-state-default.ui-corner-right').eq(4).should('be.visible').click().log('Click Nível de Estágio');
                cy.get('li.ui-dropdown-item.ui-corner-all').eq(1).should('be.visible').click().log('Seleção Nível de Estágio');
                cy.get('div.ui-dropdown-trigger.ui-state-default.ui-corner-right').eq(5).should('be.visible').click().log('Click Área de Atuação');
                cy.get('li.ui-dropdown-item.ui-corner-all').eq(1).should('be.visible').click().log('Seleção Área de Atuação');
                cy.contains('button.btn.btn-flat', 'Buscar').should('be.visible').click();
                cy.wait(2000)
                cy.contains('button.btn.btn-flat', 'Sim').click();
                cy.wait(3000)
                cy.xpath('//legend[contains(text(), "Lista de cargos")]', {timeout:5000}).should('be.visible').then(($el) => {
                // Verifica se o elemento é visível ao usuário
                expect($el).to.be.visible;
                cy.log('Lista de cargos visível na Interface!');
                });
                cy.wait(3000)
                cy.get('#publish-button').click();
                cy.wait(3000)
                
 
                
            });
        });
    });
    cy.screenshot('comprovante de Publicação', { capture: 'fullPage' });
});