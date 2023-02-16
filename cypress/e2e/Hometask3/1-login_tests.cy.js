///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import * as user from '../../fixtures/user.json';

describe('Test login', () => {

  beforeEach('Open page with form', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
  })

  it(`Login successfull`, () => {

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get(`#loginFrm_password`).type(user.password);
    cy.get('[title="Login"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=account/account');
    })
    cy.get('.maintext')
    .should('contain.text','My Account');

    cy.get('.subtext')
    .should('contain.text', user.firstName);
  })

  it(`Login without name`, () => {

    cy.get(`#loginFrm_password`).type(user.password);
    cy.get('[title="Login"]').click();

    cy.get('.alert')
    .should('be.visible')
    .and('contain','Error: Incorrect login or password provided');
  })

  it(`Login without pass`, () => {

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('[title="Login"]').click();

    cy.get('.alert')
    .should('be.visible')
    .and('contain','Error: Incorrect login or password provided');
  })

  it(`Login user which not exist`, () => {

    cy.get('#loginFrm_loginname').type(faker.internet.userName());
    cy.get(`#loginFrm_password`).type(user.password);
    cy.get('[title="Login"]').click();

    cy.get('.alert')
    .should('be.visible')
    .and('contain','Error: Incorrect login or password provided');
  })

  it(`Login with wrong password`, () => {

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get(`#loginFrm_password`).type(faker.internet.password());
    cy.get('[title="Login"]').click();

    cy.get('.alert')
    .should('be.visible')
    .and('contain','Error: Incorrect login or password provided');
  })

})

