describe('5.Demonstrar interesse em Vagas ', () => {
    beforeEach(() => {
      
    });
   
    it(' Interesse  vagas', () => {
       // Primeiro, leia os dados da planilha Excel
       cy.readExcel('C:/Projetos/MPCE_Atomações_Cypress/cypress/fixtures/auto.xlsx', '5-demInteresseVagaPortal').then((data) => {
         // Contar as linhas preenchidas
         const preenchidas = data.filter(row => row.some(cell => cell !== null && cell !== '')).length;
   
         // Em seguida, itere sobre cada linha de dados preenchida
         for (let i = 0; i < preenchidas; i++) {
           // Execute a automação para cada nome
           cy.acessoPortal()
           cy.btnEntrar()
           cy.inputUsuario(data[i][0])
           cy.inputSenha(data[i][1])
           cy.btnLogar()
           cy.campoPesquisaInteresse()
           
         }
       });
    });
   });


