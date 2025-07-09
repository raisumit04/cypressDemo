class Admin{
    searchUser(userRole, username, fullName) {
        cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type(userRole);
        cy.get(`[placeholder="Type for hints.."]`).type(username);
        cy.contains(fullName).click();
        cy.get(`button[type="Submit"]`).click();
    }
}

export default Admin;