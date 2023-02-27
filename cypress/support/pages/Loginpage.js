class Loginpage {
    visit(){
        cy.log('Open login page');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPassField(){
        return  cy.get(`#loginFrm_password`);
    }
    
    getSubmit(){
        return cy.get('[title="Login"]');
    }

    getRegistrationLink(){
        return cy.get('#accountFrm_accountregister');
    }

    getContinue() {
        return cy.get(`[title="Continue"]`);
    }

    submitLoginform(user) {
        this.getLoginField().type(user.username);
        this.getPassField().type(user.password);
        this.getSubmit().click();
    }
    goToRegistration(){
        this.getRegistrationLink().click();
        this.getContinue().click();
    }
}

export default new Loginpage();