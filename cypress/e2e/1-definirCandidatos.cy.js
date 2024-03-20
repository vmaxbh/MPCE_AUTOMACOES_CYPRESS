describe('template spec', () => {
  beforeEach(() => {
    cy.LoginTeste()
  });
  it('Navegar para Área do Candidato dentro de Estagiário', () => {
    cy.navExplorerEstagiariosCanditado()
  })
})