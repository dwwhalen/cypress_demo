describe('todos API', () => {
    it('returns JSON', () => {
      cy.request('http://localhost:3000/employees')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
  })