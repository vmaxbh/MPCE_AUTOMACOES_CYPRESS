Cypress.Commands.add('iframe_1_Posicao', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239e > .view > .view-content > iframe').then(($iframe) => {
        
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        
        cy.wrap(iframeDocument.body).within(() => {
            
            cy.get('input[title="Filtrar por nome"]', {timeout:10000}).should('be.visible').clear().type('Recursos Humanos{enter}');
            cy.log('Valor inserido com sucesso no campo de pesquisa! clicado enter');
            cy.wait(3000);
            cy.contains('span', 'Posição').scrollIntoView().should('be.visible').click();
            cy.log('Campo Posição clicado com sucesso dentro do iframe!')
        });
    });
});

Cypress.Commands.add('iframe_2_selePosicao', () => {
    const iframeSelector = 'iframe[slotid="5a27e943642bd12b6de3239c"]';
    const secondIframeSelector = '#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe';

    cy.get(iframeSelector).should('be.visible').then(($firstIframe) => {
        const iframeDocument = $firstIframe.get(0).contentDocument || $firstIframe.get(0).contentWindow.document;
        cy.wrap(iframeDocument.body).within(() => {
            cy.get('.object-list-container.view-container')
            .find('input.list-search[title="Filtrar por nome"]')
            .each(($input) => {
                cy.wrap($input).type('Estagiário (ID-7){enter}');
                cy.contains('Estagiário (ID-7)', {timeout:10000}).click();
                
            });
        });
    });
});

Cypress.Commands.add('iframe_3_desativPosicao', () => {
    cy.get('sy-slot#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe').then(($iframe) => {
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            cy.wrap(iframeDocument.body).within(() => {
                cy.get('button.sy-fab.sy-fab-dark.sy-fab-floating[title="Atualizar"]').should('be.visible').click();
                cy.get('button.sy-btn.sy-btn-icon-left.sy-btn-success.sy-btn-lg.sy-btn-floating').should('be.visible').click();
                cy.get('span.lever').should('be.visible').click()
                
            });
        });
    });
});
