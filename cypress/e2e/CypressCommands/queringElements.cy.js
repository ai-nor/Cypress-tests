///<reference types="cypress"/>


it('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/querying');
  
  cy.get('#query-btn').should('contain', 'Button');

  cy.get('li:contains("bananas")').should('contain', 'bananas');
  cy.contains('bananas').should('contain', 'bananas');
  cy.contains('li.third', 'bananas').should('contain', 'bananas');
  cy.get('#querying').contains('bananas').should('have.class', 'third');

  cy.get('.query-form').within( () => {
    cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email');
    cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password');

    // should be unreachable
    // cy.get('#inputName').should('have.attr', 'placeholder', 'Password');
  })

  cy.root().should('contain', 'bananas');

  cy.get('div.col-xs-5 form').within( () => {
    cy.root().should('have.class', 'query-form');
  })
})

it('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/traversal');
  
  cy.get('[class="well"]')
  .first()                         //знаходить перший елемент зі списку однакових елементів, те саме для last() - останній елемент
  .children('li')                 //знаходить всі чайлди елементу 
  .eq(0)                           //знаходить елемент за індексом зі всього списку, починаючи з 0
  .should('contain', 'Home');
  
  cy.get('.traversal-breadcrumb breadcrumb')
  .children('.active')                 //знаходить безпосередній чайлд елементу (не через декілька)
  .eq(0)
  .should('contain', 'Data');

  })

  it.only('Quering elements', () => {
    cy.visit('http://localhost:8080/commands/traversal');
    
    cy.get('.traversal-badge')
    .closest('ul')                 //знаходить найближчий елемент у структурі, і чайлд, і батьківський
    .should('have.class', 'list-group')  //перевірка have. для інших елементів, атрибутів і т.д.
    .and('contain', 'Event');     //перевірка contain перевіряє тільки текст 

    cy.get('.traversal-ul')
    .contains ('li','apples')
    .next()                         //команда бере наступний елемент за вказаним, який знаходиться на тому самому рівні
    .should('contain','oranges');

    cy.get('.traversal-disabled button')
    .not('disabled')
    .should('be.enabled');

    cy.get('.traversal-mark')
    .parent()                         //знаходить батьківський елемент від вказаного, але лише на 1 рівень вище
    .should('contain','Morbi leo risus');

    cy.contains('.active','About')

    cy.get('.traversal-cite')
    .parents()                        //знаходить ВСІ батьківські елементи сторінки
    .should('contain','Traversal');

    cy.get('.traversal-cite')
    .parents('blockquote')                        //знаходить ВСІ батьківські елементи сторінки до вказаного локатору 'blockquote'
    .should('contain','Lorem ipsum');

    cy.get('.pagination.traversal-pagination')
    .find('span')                                 //знаходить елемент всередині вказаного блоку на будь-якому рівні, по вказаному атрибуту
    .last()                                       //бере останній елемент зі списку
    .should('contain','»')

    })


