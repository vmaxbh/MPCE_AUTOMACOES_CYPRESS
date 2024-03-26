require('cypress-xpath')
Cypress.Commands.add('iframe_1_Posicao', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239e > .view > .view-content > iframe').then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
        cy.wrap(iframeDocument.body).within(() => {
            // Agora você pode usar cy.contains() para encontrar e clicar no elemento "Estagiários"
            cy.wait(2000);
            cy.get('input[title="Filtrar por nome"]', {timeout:10000}).should('be.visible').clear().type('Recursos Humanos{enter}');
            cy.log('Valor inserido com sucesso no campo de pesquisa! clicado enter');
            cy.wait(2000);
            cy.contains('span', 'Posição', {timeout:10000}).scrollIntoView().should('be.visible').click();
            cy.log('Campo Posição clicado com sucesso dentro do iframe!')
            cy.wait(3000)
        });
    });
});

Cypress.Commands.add('iframe_2_selePosicao', (nome) => {
    // Seleciona os iframes
    cy.get('#slotId_5a27e943642bd12b6de3239c > .view > .view-content > iframe').first().then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        cy.get(iframe).should('be.visible').then(($firstIframe) => {
            const iframeDocument = $firstIframe.get(0).contentDocument || $firstIframe.get(0).contentWindow.document;
            cy.wrap(iframeDocument.body).within(() => {
                cy.get('.object-list-container.view-container')
                .find('input.list-search[title="Filtrar por nome"]')
                .each(($input) => {
                    // Usa o parâmetro 'nome' para preencher o campo de pesquisa
                    cy.wrap($input).clear().type(nome);
                    cy.wait(1000)
                    // Supondo que você queira clicar em um elemento que contém o nome passado como argumento
                    cy.contains(nome, {timeout:10000}).click();
                    cy.wait(3000)
                });
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
                cy.get('button.sy-fab.sy-fab-dark.sy-fab-floating[title="Atualizar"]', {timeout:6000}).should('be.visible').click();
                cy.wait(1000)
                cy.get('button.sy-btn.sy-btn-icon-left.sy-btn-success.sy-btn-lg.sy-btn-floating', { timeout: 5000 })
                .then(($button) => {
                    // Verifica se o botão existe
                    if ($button.length > 0) {
                        // Tenta interagir com o botão apenas se ele estiver visível
                        cy.wrap($button).then(($visibleButton) => {
                            if ($visibleButton.is(':visible')) {
                                // Se o botão estiver visível, clique nele
                                cy.wrap($visibleButton).contains('Sim').click();
                            } else {
                                // Se o botão não estiver visível, registre uma mensagem e retorne
                                cy.log('Botão não visível, passando para a próxima etapa.');
                                return;
                            }
                        });
                    } else {
                        // Se o botão não existir, registre uma mensagem e retorne
                        cy.log('Botão não encontrado, passando para a próxima etapa.');
                        return;
                    }
                });
                cy.wait(2000)
                cy.xpath('/html/body/sy-root/div/sy-draft-edit/div[2]/div/div[2]/div[2]/form/sy-fields/div/div/div[6]/sy-field/fieldset/div/sy-single-field/div/div/div/sy-input-embedded-reference/div[2]/sy-fields/div/div/div[16]/sy-field/fieldset/div/sy-single-field/sy-input-boolean/div/label', {timeout:6000}).click();
                cy.wait(1000)
                cy.get('button#publish-button.sy-fab.sy-fab-success.sy-fab-floating').click();
            });
        });
    });
});



Cypress.Commands.add('iframe_3_BloquearPosicao', () => {
    cy.get('sy-slot#slotId_5a27e943642bd12b6de3239d > .view > .view-content > iframe').then(($iframe) => {
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            cy.wrap(iframeDocument.body).within(() => {
                cy.get('button.sy-fab.sy-fab-dark.sy-fab-floating[title="Atualizar"]').should('be.visible').click();
                cy.wait(1000)
                cy.get('button.sy-btn.sy-btn-icon-left.sy-btn-success.sy-btn-lg.sy-btn-floating').then(($button) => {
                    if ($button.length > 0) {
                       // Se o botão existir, clique nele
                       cy.wrap($button).contains('Sim').click();
                    } else {
                       // Se o botão não existir, retorne para passar para o próximo passo
                       return;
                    }
                   });
                cy.wait(3000)
                cy.xpath('/html/body/sy-root/div/sy-draft-edit/div[2]/div/div[2]/div[2]/form/sy-fields/div/div/div[6]/sy-field/fieldset/div/sy-single-field/div/div/div/sy-input-embedded-reference/div[2]/sy-fields/div/div/div[16]/sy-field/fieldset/div/sy-single-field/sy-input-boolean/div/label/span').dblclick();
                cy.wait(1000)
                cy.get('button#publish-button.sy-fab.sy-fab-success.sy-fab-floating').click();
            });
        });
    });
});

