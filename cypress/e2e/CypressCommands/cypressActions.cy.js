///<reference types="cypress"/>

it('Quering elements', () => {
    cy.visit('http://localhost:8080/commands/actions');
    
    cy.get('#email1')
    .type('text@text.com')                          //надрукувати текст у лапках
    .should('have.value', 'text@text.com' )         //перевірка що текст введено
    .clear()                                           //очистити поле
    .type('L{rightArrow}E{rightArrow}',{delay:500})   //{rightArrow} і лефт - рухає курсор вправо-вліво, {daley} - затримка між кожним символом на вказану кількість мілісек
    .type('{selectAll}{backspace}' )                    //виділити все і натиснути кнопку бекспейс
    .should('have.value', '');
    

    cy.get('[disabled="disabled"]')
    .type('qqqqq', {force:true})                        //force - дозволяє ввести текст у задізаблене поле

    cy.get('#password1')
    .focus()                                    //дозволяє сфокусуватися на елементі сторінки (імітація кліку на полі наприклад)
    .blur()                                    //розфокус поля, ніби як клікнути у фншому місці сторінки
    .prev()
    .should('have.attr','style', 'color: orange;');
    
    cy.get('#couponCode1')
    .type('test')
    .closest('form')
    .submit()                                   //дозволяє імітувати нажати ентер для відправки форми нажаттям на ентер (працює тільки для форми)
    .siblings()                                 //команда дістає всі елементи які на одному рівні з елементом
    //.next()                                     //команда дістає наступний елемент на тому ж рівні
    .should('contain','Your form has been submitted!');
  

    cy.get('#action-canvas')
    .click('left')
    .click('right')                             //клікнути у визначену область елементу
    .click('bottomLeft')
    .click(10,10)                              //клікнути по заданих координатах елементу (в пікселях з зівої верхньої точки)
    .dblclick()                                  //зробити даблклік
    .rightclick();                                //імітує клік правою кнопкою миші


    cy.get('.action-checkboxes [type="checkbox"]')
    .check({force:true})                                        //заміняє проставляння галочки на чекбокс АБО радіобаттон
    .uncheck({force:true});                                        //заміняє зняття галочки з чекбоксу АБО радіобаттону


    cy.get('[class="form-control action-select"]')
    .select('oranges')                                           //обирає значення з типового системного дропдауну
    
    cy.get('#scroll-horizontal button')
    .scrollIntoView()                                     //скролить сторінку ДО вказаного у геті елементу, а не від (ВАЖЛИВО!!)

    cy.get('#scroll-horizontal')
    .scrollTo('right')                                            //скроллить сторінку у сказаному напрямку до кінця

    cy.get('.trigger-input-range')
    .invoke('val','10')                                      //викликає проперті елементу (велью) - стилі, значення які є у елементу (таба properties у інспекторі) і зробити якісь дії
    .trigger('change')                                       //дозволяє імітувати різні дії на сторінці, наприклад наведення миші і інші, треба дивитися у документації                                 
    

    })