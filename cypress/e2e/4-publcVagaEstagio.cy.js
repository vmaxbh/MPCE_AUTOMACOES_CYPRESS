require('cypress-xpath')

describe('4. Abrir um ticket de Publicar de Vagas de Estágio', () => {
 beforeEach(() => {
    cy.LoginTeste()
    cy.viewport(1280, 720);
 });

 it('Automação Publicação Vaga de Estágio', () => {
    // Primeiro, leia os dados da planilha Excel
    cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', '4-publicVagaEstagio').then((data) => {
      // Contar as linhas preenchidas
      const preenchidas = data.filter(row => row.some(cell => cell !== null && cell !== '')).length;

      // Em seguida, itere sobre cada linha de dados preenchida
      for (let i = 0; i < preenchidas; i++) {
        // Execute a automação para cada nome
        cy.iframe_1_PublicVaga(data[i][0]);
      }
    });
 });
});