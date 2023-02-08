///<reference types="cypress"/>


describe('template spec', () => {
  it('Explicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');
  
    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)                                                  //елемент 3 попорядку
    .should('have.class', 'success')                        //перевірка на наявність класу - перше це умова, друге - назва класу

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)                                                  //елемент 3 попорядку
    .should('have.attr', 'class')                           //перевірка на наявність аттрибуту - перше це умова, друге - аттрибуту

    cy.get('  .table.table-bordered.assertion-table tr td') 
    .eq(3)
    .should('have.text', 'Column content');                 //перевірка що елемент містить текст, друге значення це текст, який буде порівнюватися з наявним

    cy.get('  .table.table-bordered.assertion-table tr td') 
    .eq(3)
    .should('contain', 'Column content');                   //перевірка що елемент містить текст, друге значення це текст, який буде порівнюватися з наявним (часткове співпадіння)

    cy.get('  .table.table-bordered.assertion-table tr td') 
    .eq(3)
    .should('have.html', 'Column content');                 //перевірка що html містить текст, друге значення це текст, який буде порівнюватися з наявним

    cy.get('  .table.table-bordered.assertion-table tr td') 
    .eq(3)
    .should('include.text', 'Column');                      //перевірка що html містить текст, друге значення це текст, який буде порівнюватися з наявним (часткове співпадіння)

    cy.get('  .table.table-bordered.assertion-table tr td') 
    .eq(3)
    .should('not.contain', 'hello');                        //перевірка що елемент НЕ текст, друге значення це текст, який буде порівнюватися з наявним (часткове співпадіння)

    cy.get('  .table.table-bordered.assertion-table tr th') 
    .eq(3)
    .should('contain', '3');          
    
    cy.get('  .table.table-bordered.assertion-table tr th') 
    .eq(3)
    .invoke('text')                                              //команда invoke дістає властивості елементу
    .then(parseFloat)                                            //перетворення тексту у число
    .should('be.greaterThan', 2);                                //перевірка що воно більше 2
  })
})


it('Explicit assertions', () => {
  cy.visit('http://localhost:8080/commands/querying');
  cy.get("#inputName")
  .type("hello")
  .should('have.value', "hello")                                 //перевірка що значення у полі містить певне значення
  .should('be.enabled')                                         //перевірка що елемент активний, також можна зробити disabled
  .should('have.length', 10)                                    // кількість елементів - довжина
})
