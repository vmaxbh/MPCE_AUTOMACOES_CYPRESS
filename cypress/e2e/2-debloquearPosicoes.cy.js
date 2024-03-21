describe('2.Entrar na classe Posição e Desbloquear as posições', () => {
  beforeEach(() => {
     cy.LoginTeste()
     cy.viewport(1280, 720);
  });
  it('Desbloquear Posições', () => {
     // Primeiro, leia os dados da planilha Excel
     cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', '2-desbloquearposicoes').then((data) => {
       // Em seguida, itere sobre cada linha de dados (assumindo que cada linha contém um nome)
       data.forEach((row) => {
         // Execute a automação para cada nome
         cy.iframe_1_Posicao();
         cy.iframe_2_selePosicao(row[0]); // Passa o nome da linha atual para o comando
         cy.iframe_3_desativPosicao();
       });
     });
  });
 });