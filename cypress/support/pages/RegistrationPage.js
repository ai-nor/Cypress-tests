class RegistrationPage {
    
    getFirstName(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastName(){
        return cy.get('#AccountFrm_lastname');
    }
    
    getUserEmail(){
        return cy.get('#AccountFrm_email');
    }

    getTelephone(){
        return cy.get('#AccountFrm_telephone');
    }

    getFax() {
        return cy.get('#AccountFrm_fax');
    }

    getCompany() {
        return cy.get('#AccountFrm_company');
    }
    getAddress() {
        return cy.get('#AccountFrm_address_1');
    }
    getCity() {
        return cy.get('#AccountFrm_city');
    }
    getCountry() {
        return cy.get('#AccountFrm_country_id');
    }
    getZone() {
        return cy.get('#AccountFrm_zone_id');
    }

    getPostcode() {
        return cy.get('#AccountFrm_postcode');
    }
    getUserName() {
        return cy.get('#AccountFrm_loginname');
    }
    getPassword() {
        return cy.get('#AccountFrm_password');
    }
    getConfirmPassword() {
        return cy.get('#AccountFrm_confirm');
    }
    getNewsCheck() {
        return cy.get('#AccountFrm_newsletter0');
    }

    getTermsCheck() {
        return cy.get('#AccountFrm_agree');
    }
    getContinueForm() {
        return cy.get(`[title="Continue"]`);
    }



    submitRegistrationform(user) {
        cy.log('**Заповнення форми**');
        this.getFirstName().type(user.firstName).should('have.value', user.firstName);
        this.getLastName().type(user.lastName).should('have.value', user.lastName);
        this.getUserEmail().type(user.email).should('have.value', user.email);
        this.getTelephone().type('123456789').should('have.value', '123456789');
        this.getFax().type('987654321').should('have.value', '987654321');
        this.getCompany().type('Admixer').should('have.value', 'Admixer');
        this.getAddress().type('Address').should('have.value', 'Address');
        this.getCity().type(user.city).should('have.value', user.city);
        this.getCountry().select('Ukraine').should('have.value', '220');
        this.getZone().select('Kyiv').should('have.value', '3490');
        this.getPostcode().type('BT472AY').should('have.value', 'BT472AY');
        this.getUserName().type(user.userName).should('have.value', user.userName);
        this.getPassword().type(user.password).should('have.value', user.password);
        this.getConfirmPassword().type(user.password).should('have.value', user.password);
        this.getNewsCheck().check();
        this.getTermsCheck().check();
        this.getContinueForm().click();

    }
   
}

export default new RegistrationPage();
