require('cypress-xpath')
describe('4.	Abrir um ticket de Publicar de Vagas de Estágio', () => {
    beforeEach(() => {
      cy.LoginTeste()
      cy.viewport(1280, 720);
     
    });
   

    it('Automação Pubicação Vaga de Estágio', () => {
      // Primeiro, leia os dados da planilha Excel
      cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', '4-publicVagaEstagio').then((data) => {
        // Em seguida, itere sobre cada linha de dados (assumindo que cada linha contém um nome)
        data.forEach((row) => {
          // Execute a automação para cada nome
          cy.iframe_1_PublicVaga(row[0])
          
        });
      });
   });

    
  });