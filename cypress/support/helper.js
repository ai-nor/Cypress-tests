

export function searchProductByName(value) {
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
        if(text.includes(product.name)) {
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