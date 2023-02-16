it('Registration', () => {
    cy.visit('https://automationteststore.com/');

    cy.get('.topnavbar [data-id="menu_account"]').click();
    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type('FirstTestName');
    cy.get('#AccountFrm_lastname').type('LastTestName');
    cy.get('#AccountFrm_email').type('fakeMail6@mail.com');

    cy.get('#AccountFrm_address_1').type('Test Address str.');
    cy.get('#AccountFrm_city').type('Test City');
      
    cy.get('#AccountFrm_postcode').type('37289');
    cy.get('#AccountFrm_country_id').select('Denmark');

    cy.get('#AccountFrm_loginname').type('testUsernameForAutomation6');
    cy.get('#AccountFrm_password').type('123QWEqwe');
    cy.get('#AccountFrm_confirm').type('123QWEqwe');

    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();

    cy.get('#AccountFrm_zone_id')
    .select(2, {force:true})
    .invoke('val')
    .should('not.eq', 'FALSE');

    cy.get('button[title="Continue"]').click();

    cy.get('h1 span.subtext').should('contain', 'FirstTestName')
})

it('Authorization', () => {

    cy.log('Open website login page');
    cy.visit('https://automationteststore.com/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type('testUsernameForAutomation6');
    cy.get('#loginFrm_password').type('123QWEqwe');

    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('h1 span.subtext').should('contain', 'FirstTestName')

})
