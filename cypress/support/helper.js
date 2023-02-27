

export function searchProductByName(value, product) {
    cy.visit('/');
    cy.get('input#filter_keyword').type(value);
    cy.get('.button-in-search').click();
        
    function findProduct(product) {
        
        cy.get('.fixed_wrapper').then((content) => {
    
            if(cy.get(content.find(`[title='${product}']`).length >0)) {
                cy.get(`[title='${product}']`).click();
            }
            else {
                cy.get('.pagination li').contains('>').click();
                findProduct(product);
            }
            })
        }
        
    findProduct(product);
}

export function orderProductByUser(product, user) {
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

}


export function loginViaUI(user){
    cy.visit ('/index.php?rt=account/login');
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
}

export function headlessLogin(user){
    let csrfToken;
    let csrfInstance;

    cy.request('GET', '/index.php?rt=account/login').then( response => {
        let htmlResp = document.createElement('html')
        htmlResp.innerHTML = response.body;
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.username,
                password: user.password,
                csrfinstance: csrfInstance,
                csrftoken: csrfToken
            },
            form: true
        })
    })
}

// export function someLoginViaAPI(){
//     let token;

//     cy.request({
//         method: 'POST',
//         url: '/index.php?rt=account/login',
//         body: {
//             loginname: user.username,
//             password: user.password
//         }
//     }).then( response => {
//         token = response.body.token
//         cy.setCookie('token', response.body.token);
//         window.localStorage.setItem('token', response.body.token);
//         window.sessionStorage.setItem('token', response.body.token);
//     })
// }