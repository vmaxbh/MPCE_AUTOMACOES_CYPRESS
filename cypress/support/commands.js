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
 cy.readFile(filePath, 'binary', {timeout: 10000}).then((data) => {
    const workbook = XLSX.read(data, { type: 'binary' });
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    return jsonData;
 });
});



