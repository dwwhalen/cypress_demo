describe('Open a URL', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io')
    })
  })

  describe('Click the "Type" link and verify we get the correct page ', function() {
    it('finds the content "type"', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
  })

  describe('Enter an email on the "type" page and verify the email address matches', function() {
    it('finds the content "type"', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })