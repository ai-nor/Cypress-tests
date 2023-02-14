///<reference types="cypress"/>


let userLogin;
let userPassword;

describe('Registration/authorization', () => {

  beforeEach('Open page with form', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
  })

  it(`Registration form`, () => {
    cy.get('#accountFrm_accountregister').click();
    cy.get(`[title="Continue"]`).click();

    cy.get('#AccountFrm_firstname').type('Tetiana')
    .should('have.value','Tetiana');
    cy.get('#AccountFrm_lastname').type('Nor')
    .should('have.value','Nor');
    cy.get('#AccountFrm_email').type('nor' + Math.random() + '@test.com');
    //cy.get('#AccountFrm_email').type('nor@test.com')
    //.should('have.value','nor@test.com');
    cy.get('#AccountFrm_telephone').type('123456789')
    .should('have.value','123456789');
    cy.get('#AccountFrm_fax').type('987654321')
    .should('have.value','987654321');
    cy.get('#AccountFrm_company').type('Admixer')
    .should('have.value','Admixer');
    cy.get('#AccountFrm_address_1').type('Address')
    .should('have.value','Address');
    cy.get('#AccountFrm_city').type('Kyiv')
    .should('have.value','Kyiv');
    cy.get('#AccountFrm_country_id').select('Ukraine')
    .should('have.value','220');
    cy.get('#AccountFrm_zone_id').select('Kyiv')
    .should('have.value','3490');
    cy.get('#AccountFrm_postcode').type('BT472AY')
    .should('have.value','BT472AY');
    cy.get('#AccountFrm_loginname').type('ai-nor' + + Math.random())
    .invoke('text')  
    .then(text => {
     userLogin = text;
     });
    //cy.get('#AccountFrm_loginname').type('ai-nor');
    cy.get('#AccountFrm_password').type('password123')
    .invoke('text')  
    .then(text => {
     userPassword = text;
     });
    cy.get('#AccountFrm_confirm').type('password123')
    .should('have.value','password123');

    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();

    cy.get(`[title="Continue"]`).click();
    
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=account/success');
    })
    cy.get('.heading1')
    .children()
    .should('contain.text','Your Account Has Been Created!');

    })



  it(`Authorization form`, () => {
    // cy.get('#loginFrm_loginname').type(`${userLogin}`);
    // cy.get(`#loginFrm_password`).type(`${userPassword}`);
    cy.get('#loginFrm_loginname').type('ai-nor');
    cy.get(`#loginFrm_password`).type('password123');
    cy.get('[title="Login"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=account/account');
    })
    cy.get('#maincontainer')
    .children()
    .should('contain.text','My Account');
  })

})

