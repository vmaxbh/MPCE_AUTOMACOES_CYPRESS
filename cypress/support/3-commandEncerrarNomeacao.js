require('cypress-xpath')


Cypress.Commands.add('iframe_1_navEncerrNomeacao', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239e > .view > .view-content > iframe').then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
        cy.wrap(iframeDocument.body).within(() => {
            // Agora você pode usar cy.contains() para encontrar e clicar no elemento "Estagiários"
            cy.get('input[title="Filtrar por nome"]', {timeout:10000}).should('be.visible').clear().type('Gestão de Movimentações{enter}');
            cy.log('Valor inserido com sucesso no campo de pesquisa! clicado enter');
            cy.wait(2000);
            cy.contains('span', 'Solicitação de Nomeação').scrollIntoView().should('be.visible').click();
            cy.log('Campo Posição clicado com sucesso dentro do iframe!')
            cy.wait(3000)
        });
    });
});

Cypress.Commands.add('iframe_3_excluirNomeacao', () => {
    // Seleciona o iframe externo usando um seletor mais específico
    cy.get('sy-slot#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe').then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Verifica se o iframe interno está completamente carregado
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
            cy.wrap(iframeDocument.body).within(() => {
                cy.wait(2000)
                cy.get('button[title="Encerrar Processo"]').should('be.visible').click();  
                cy.wait(2000)              
                cy.contains('button', 'Sim').should('be.visible').click();
                cy.log('Botão Sim clicado com sucesso!')
                cy.get('#justificativa').type('Nomeação excluída por automação.');
                cy.log('Mensagem escrita com sucesso no textarea!')
                cy.wait(5000)
                cy.get('#publish-button').click();
                cy.log('Botão Enviar clicado com sucesso!')
                cy.get('button[aria-label="Sim"]').should('be.visible').click();
                cy.get('#publish-button', {timeout:2000}).should('be.visible').click();
            });
        });
    });
});



Cypress.Commands.add('iframe_2_seleNomeacao', () => {
    // Seleciona os iframes
    cy.get('#slotId_5a27e943642bd12b6de3239c > .view > .view-content > iframe').first().then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
 
        // Verifica se o iframe interno está completamente carregado
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
            cy.wrap(iframeDocument.body).within(() => {
                cy.get('input.list-search[title="Filtrar por nome"]', { timeout: 20000 }).should('be.visible').clear().type('Icaro Santiago', {force:true});
                cy.wait(2000);
                cy.get('input.list-search[title="Filtrar por nome"]', {timeout:5000}).type('{enter}');
                cy.wait(2000);
               
            });
        });
    });
});


Cypress.Commands.add('iframe_2_3', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239c > .view > .view-content > iframe').first().then(($iframeExterno) => {
        // Faz o Cypress focar no iframe externo
        const iframeExterno = $iframeExterno.get(0);
        const documentoExterno = iframeExterno.contentDocument || iframeExterno.contentWindow.document;
    
        // Verifica se o iframe externo está completamente carregado
        cy.wrap(documentoExterno.body).should('be.visible').then(() => {
          // Agora você pode usar cy.wrap() para envolver o documento do iframe externo e interagir com ele
          cy.wrap(documentoExterno.body).within(() => {
            cy.wait(2000);
            cy.get('.sy-card-group-item').each(($card, index, $list) => {
              cy.wrap($card).click();
              cy.get('button.sy-fab.sy-fab-dark.sy-fab-floating').click();
              cy.wait(1000)
              cy.contains('Encerrar Processo').click({force:true});
              cy.wait(3000)
              
              
            });
          });
        });
     });
    
    
});


function handleIframe() {
    // Seleciona o iframe específico
    cy.get('sy-slot#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe', { timeout: 20000 }).first().then(($iframe) => {
        // Aqui você obtém o documento do iframe
        const iframeDocument = $iframe.get(0).contentDocument || $iframe.get(0).contentWindow.document;

        // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
        cy.wrap(iframeDocument.body).within(() => {
            // Aqui você pode realizar as ações necessárias dentro do contexto do iframe
            // Exemplo de ação dentro do iframe:
            cy.get('button[title="Encerrar Processo"]').should('be.visible').click();
            cy.wait(2000);
            cy.contains('button', 'Sim').should('be.visible').click();
            cy.log('Botão Sim clicado com sucesso!');
            cy.get('#justificativa').type('Nomeação excluída por automação.');
            cy.log('Mensagem escrita com sucesso no textarea!');
            cy.wait(5000);
            cy.get('#publish-button').click();
            cy.log('Botão Enviar clicado com sucesso!');
            cy.get('button[aria-label="Sim"]').should('be.visible').click();
            cy.get('#publish-button', {timeout:2000}).should('be.visible').click();
        });
    });
}
