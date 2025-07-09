import DashboardPage from "../fixtures/PageObjectModel/dashboard";

describe('Dasboard Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
      cy.loginHRM('Admin','admin123')
    })
  
    describe('Dashboard Page Tests', () => {
        const dashboardPage = new DashboardPage();
    
        it('Verify hyperlinks are not broken on Dashboard Page', () => {
            dashboardPage.verifyLinksNotBroken();
            cy.screenshot();
        });
    
        it('Verify Images are not broken on Dashboard Page', () => {
            dashboardPage.verifyImagesNotBroken();
            cy.screenshot('dashboard/imageNotBroken/');
        });
    });
    

});