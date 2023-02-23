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

    submitLoginform(user) {
        this.getLoginField().type(user.username);
        this.getPassField().type(user.password);
        this.getSubmit().click();
    }
}

export default new Loginpage();