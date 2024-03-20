describe('2.Entrar na classe Posição e Desbloquear as posições', () => {
    beforeEach(() => {
      cy.LoginTeste()
    });
    it('Navegar para Área Posição', () => {
      cy.iframe_1_Posicao()
      cy.iframe_2_selePosicao()
      cy.iframe_3_desativPosicao()
    })
  })