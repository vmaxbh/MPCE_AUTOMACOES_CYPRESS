require('cypress-xpath')
require('cypress-real-events/support')
require('cypress-shadow-dom');
require('cypress-iframe')
Cypress.Commands.add('acessoPortal', () => {
    cy.visit('https://hom-portalinterno.mpce.mp.br')

});

Cypress.Commands.add('btnEntrar', () => {
    cy.get('#sd-sign-in-button').click()

});
Cypress.Commands.add('inputUsuario', (usuario) => {
    cy.get('.mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(usuario)

});
Cypress.Commands.add('inputSenha', (senha) => {
    cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(senha)
    

});

Cypress.Commands.add('btnLogar', () => {
    cy.get('.mb-1').click()
    cy.wait(4000)

});

Cypress.Commands.add('campoPesquisaInteresse', () => {
    cy.get('.mat-form-field-infix').type('Demonstrar interesse')
    cy.contains('Demonstrar interesse em vaga de estágio').click()
    cy.get('.sd-sticky-toolbar-action-btn').click().log('Botão Solicitar')
    cy.get('#one-ws-dialog', {timeout:20000}).then(($iframe) => {
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        cy.wrap(iframeDocument.body).should('be.visible').then(() => {
            cy.wrap(iframeDocument.body).within(() => {
                cy.get('#viewId_5d0a38ee41dfc0050350cfe5 > div > div.view-content.embedded-workspace > iframe', {timeout:20000}).then(($nestedIframe) => {
                    const nestedIframe = $nestedIframe.get(0);
                    const nestedIframeDocument = nestedIframe.contentDocument || nestedIframe.contentWindow.document;
                    cy.wrap(nestedIframeDocument.body).as('nestedIframeBody')
                    cy.get('@nestedIframeBody').then(($body) => {
                        
                        cy.wait(5000)
                        cy.document().then((doc) => {
                            
                            const element = doc.querySelector("#\\30 0fa550e-5064-4023-a72c-a46c8d424af6target > button");
                            cy.wrap(element).click({force:true})
                        });
                    });
                });
            });
        });
    });
});



    //cy.get('span.ng-star-inserted').click();
    //cy.get('button[aria-label="Não"]', { timeout: 10000 }).should('be.visible').click({force:true});
    //cy.get('button[aria-label="Não"]').click({force:true});
    //cy.contains('button', 'Não').click({force:true});
    //cy.get('span#5acf2600-e636-46ee-9d83-1a90a9c10ccatarget button').click({force:true}); 
    //cy.get('span#5acf2600-e636-46ee-9d83-1a90a9c10ccatarget button').click({force:true});
    //cy.contains('Não', {timeout:10000}).click({force: true});
    //cy.get('button.btn.btn-flat').click();
    //cy.contains('button.btn.btn-flat', 'Não').click();
    //cy.xpath('//span[@id="2d9923d4-c22f-4783-8ef2-a7e0f69a7bd3target"]/button').click();
    //cy.get('button.btn.btn-flat', { timeout: 10000 }).click();
    //cy.get('button.btn.btn-flat').click({ force: true });
    //cy.get('button.btn.btn-flat', { timeout: 10000 }).click({ force: true });
    //cy.get('button.btn.btn-flat').should('be.visible').click({ force: true });
    //cy.get('button.btn.btn-flat').should('be.visible').and('be.enabled').click({ force: true });
    //cy.get('button.btn.btn-flat').click({force : true});
    //cy.get('[data-testid="meu-botao"]').click({force: true});
    /*
    cy.document().then((doc) => {
        // Usa o documento para acessar um elemento específico
        const element = doc.querySelector('button.btn.btn-flat');
        // Faz algo com o elemento, como clicar nele
        if (element) {
           element.click({force : true});
        } else {
           console.error('Elemento não encontrado');
        }
       });
    
    */
