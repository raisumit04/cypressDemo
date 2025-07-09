describe('Login', () => {
 
  it('Hrms Login', () => {
    cy.visit('/');

    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin123")
    cy.get('button[type="submit"]').click({force:true})

   
    cy.get('.oxd-userdropdown')
      .should('be.visible')     
  })
  it('Verify Login invalid credentials', () => {
    cy.visit('/')

    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin1235")
    cy.get('button[type="submit"]').click({force:true})

   
    cy.get('div[role="alert"]')
      .should('be.visible') 
  })

})