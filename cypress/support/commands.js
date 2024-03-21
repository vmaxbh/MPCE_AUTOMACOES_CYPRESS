///<reference types="cypress-iframe" />

Cypress.Commands.add('LoginTeste', (usuario = Cypress.env('USERNAME'), senha = Cypress.env('PASSWORD')) => {
    cy.visit('/');
    cy.get('#login').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.sy-btn').click();
    cy.wait(10000); 
    cy.get('.sy-title-column > .sy-btn').should('exist').log('Componente Confirmado na tela Inicial')

});

// cypress/support/commands.js

const XLSX = require('xlsx');

Cypress.Commands.add('readExcel', (filePath, sheetName) => {
 cy.readFile(filePath, 'binary').then((data) => {
    const workbook = XLSX.read(data, { type: 'binary' });
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    return jsonData;
 });
});




Cypress.Commands.add('iframe_1_testeExcel', () => {
    cy.get('#slotId_5a27e943642bd12b6de3239e > .view > .view-content > iframe').then(($iframe) => {
        // Faz o Cypress focar no iframe
        const iframe = $iframe.get(0);
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Agora você pode usar cy.wrap() para envolver o documento do iframe e interagir com ele
        cy.wrap(iframeDocument.body).within(() => {
            cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', 'Planilha1').then((data) => {
                console.log(data); // Adicione este log para verificar os dados retornados
                cy.get('input[title="Filtrar por nome"]', {timeout:10000}).should('be.visible').clear().type(data[0][0]).type('{enter}');
                cy.log('Valor inserido com sucesso no campo de pesquisa! clicado enter');
                cy.wait(2000);
                cy.contains('span', 'Posição').scrollIntoView().should('be.visible').click();
                cy.log('Campo Posição clicado com sucesso dentro do iframe!')
                cy.wait(3000)
            });
            
            
            
            
            
        });
    });
});


/*
it('Lê dados do Excel e os usa nos testes', () => {
       cy.readExcel('caminho/para/seu/arquivo.xlsx', 'NomeDaPlanilha').then((data) => {
         // Aqui você pode usar os dados da planilha em seus testes
         // Por exemplo, você pode preencher um formulário com os dados
         cy.get('input[name="nome"]').type(data[0][0]); // Supondo que o primeiro valor da primeira linha seja o nome
         cy.get('input[name="email"]').type(data[0][1]); // Supondo que o segundo valor da primeira linha seja o email
         // ... e assim por diante para outros campos
       });
    });
*/