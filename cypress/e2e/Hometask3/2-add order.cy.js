///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
import {loginViaUI} from '../../support/helper'; 
import * as user from '../../fixtures/user.json';
import * as product from '../../fixtures/product.json';

describe('Order', () => {

  // beforeEach('Login to account', () => {
  //   cy.visit ('https://automationteststore.com/index.php?rt=account/login');
  //   cy.get('#loginFrm_loginname').type(user.userName);
  //   cy.get(`#loginFrm_password`).type(user.password);
  //   cy.get('[title="Login"]').click();
  //   cy.location().should((loc) => {
  //     expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=account/account');
  //   })
  //   cy.get('.maintext')
  //   .should('contain.text','My Account');

  //   cy.get('.subtext')
  //   .should('contain.text', user.firstName);
  // })

  it(`Order something`, () => {

    loginViaUI(user); //з хелперу виклик функції, яка логінить на сайт

    cy.visit('/');
    
    cy.log('Додавання товару у кошик');
    cy.get(`[title="${product.name}"]`).eq(0).click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(`https://automationteststore.com/index.php?rt=product/product&product_id=${product.Id}`);
    })
    cy.get('.cart').should('be.visible').click();
    
    cy.log('Перевірка товару у кошику');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=checkout/cart');
    })
    cy.get(`#cart_quantity${product.Id}`).clear().type('1');
    cy.get('#cart_update').click();
    cy.get('tbody .align_left a')
    .should('contain', `${product.name}`);
    cy.get('tbody .align_left').eq(3)
    .should('contain',`${product.model}`);
    cy.get('tbody .align_right').eq(2)
    .should('contain',`${product.price}`);
    cy.get('tbody .align_right').eq(3)
    .should('contain',`${product.price}`);
    
    cy.log('Замовлення товару');
    cy.get('#cart_checkout1').click();

    cy.log('Перегляд інформації щодо оплати/доставки');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=checkout/confirm');
    })
    cy.get('.confirm_shippment_options')
    .children()
    .should('contain',`${user.firstName}`)
    .and('contain', `${user.city}`)
    .and('contain', `${user.postcode}`);
    cy.get('.confirm_payment_options')
    .children()
    .should('contain',`${user.firstName}`)
    .and('contain', `${user.city}`)
    .and('contain', `${user.postcode}`);

    cy.get('.sidewidt')
    .children()
    .should('contain', `${product.name}`)
    .and('contain', `${product.price}`);

    cy.log('Підтвердження замовлення');
    cy.get('#checkout_btn').click();

    cy.log('Замовлення створене');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://automationteststore.com/index.php?rt=checkout/success');
    })
    cy.get('.maintext')
    .should('contain','Your Order Has Been Processed!');

  })
})

