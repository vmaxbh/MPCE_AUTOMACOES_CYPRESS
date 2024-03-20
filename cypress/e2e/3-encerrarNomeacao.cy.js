describe('3.Listar as Nomeações em andamento e encerrar o ticket se houver nomeação de algum dos 7 candidatos.', () => {
  beforeEach(() => {
      cy.LoginTeste();
      cy.iframe_1_navEncerrNomeacao();
      cy.viewport(1280, 720);
  });
  
  it.only('Encerramento de ticket de nomeações Icaro Santiago', () => {
    cy.iframe_2_seleNomeacao();
    cy.iframe_2_3()
    
   });
 });
