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

    verifyNewUser(user) {
        cy.location().should((loc) => {
            expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=account/success');
          })
        cy.get('.maintext')
        .should('contain.text','Your Account Has Been Created!');
    
    }
}

export default new Accountpage();
