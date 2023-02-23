class Accountpage {
    visit(){
        cy.log('Open login page');
        cy.visit('/index.php?rt=account/account');
    }

    verifyUser(user){
        cy.get('.maintext')
        .should('contain.text','My Account');
    
        cy.get('.subtext')
        .should('contain.text', user.firstName);
    }

}

export default new Accountpage();