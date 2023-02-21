
import * as product from '../../fixtures/product.json';

let value = 'e';
it(`test`, () => {
cy.visit('/');
cy.get('input#filter_keyword').type(value);
cy.get('.button-in-search').click();

    // let goToNextPage = function() {
    //     cy.get('.pagination li').find('a').contains('>').should('be.visible')
    //       .then(($el) => {
    //         // якщо елемент видимий, клікаємо на нього
    //         $el.click();
    //       })
    //       .catch(() => {
    //         // якщо елемент не видимий, виводимо повідомлення
    //         cy.log('Перевірку закінчено,товар не знайдений');
    //       });
    //   }


cy.get('.fixed_wrapper').each(($el) => {
    const text = $el.text(); 
    cy.log(text);
    if(text.includes(`${product.name}`)) {
        cy.wrap($el).click();
    }
    else {
        cy.get('.pagination li').contains('>').click();
    }

})
.then(($els) => {
    if ($els.length === 0) {
        cy.log('Елемент не знайдено');
       }
    })


})