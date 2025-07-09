import Admin from "../fixtures/PageObjectModel/admin";


describe('Dasboard Tests on Orange HRM Application', () => {
  const adminPage = new Admin();
    beforeEach('Before Tests', () => {
      cy.loginHRM('Admin','admin123')
      cy.get('a[href="/web/index.php/admin/viewAdminModule"]')
      .should('be.visible')
      .click()
    })

    it("Search Users",() =>{
      adminPage.searchUser("Admin" ,"Adi Wadaskar","Adi S Wadaskar");
    })



})