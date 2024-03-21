require('cypress-xpath')
describe('2A.Entrar na classe Posição e Bloquear as posições', () => {
  beforeEach(() => {
    cy.LoginTeste()
    cy.viewport(1280, 720);
  });
  it('Desbloquear Posições', () => {
    cy.iframe_1_Posicao()
    cy.iframe_2_selePosicao()
    cy.iframe_3_BloquearPosicao()
    
    
  })
})