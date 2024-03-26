require('cypress-xpath')

describe('2A.Entrar na classe Posição e Bloquear as posições', () => {
 beforeEach(() => {
    cy.LoginTeste()
    cy.viewport(1280, 720);
 });

 it('Bloquear Posições', () => {
    // Primeiro, leia os dados da planilha Excel
    cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', '2A-bloquearposicoes').then((data) => {
      // Contar as linhas preenchidas
      const preenchidas = data.filter(row => row.some(cell => cell !== null && cell !== '')).length;

      // Em seguida, itere sobre cada linha de dados preenchida
      for (let i = 0; i < preenchidas; i++) {
        // Execute a automação para cada nome
        cy.iframe_1_Posicao();
        cy.iframe_2_selePosicao(data[i][0]); // Passa o nome da linha atual para o comando
        cy.iframe_3_BloquearPosicao();
      }
    });
 });
});