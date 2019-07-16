describe('employees API', () => {
  it('Given the Employees request returns JSON', () => {
    cy.request('http://localhost:3000/employees')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('And the request returns 50 items', () => {
    cy.request('http://localhost:3000/employees')
      .its('body')
      .should('have.length', 50)
  })

  it('And item #5 exists', () => {
    cy.request('http://localhost:3000/employees/5').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('When I delete item #5', () => {
    cy.request('DELETE', 'http://localhost:3000/employees/5').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Then item #5 does not exist', () => {
    cy.request({url: 'http://localhost:3000/employees/5', failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('And the request returns 49 items', () => {
    cy.request('http://localhost:3000/employees')
      .its('body')
      .should('have.length', 49)
  })
})

