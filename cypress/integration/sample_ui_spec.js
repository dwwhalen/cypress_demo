describe('Click the "Type" link and verify we get the correct page', function () {
  it('clicks on the Type link', function () {
    cy.visit('https://example.cypress.io')
    // cy.pause()
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.row > :nth-child(1) > p')
      .contains('To type into a DOM element, use the .type() command.')
  })
})

describe('Enter an email on the "type" page and verify the email address matches', function() {
  it('enter an email adress in the email textbox', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})