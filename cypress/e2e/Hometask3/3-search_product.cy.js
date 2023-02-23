
import {headlessLogin} from '../../support/helper'; 
import {searchProductByName} from '../../support/helper'; 
import {orderProductByUser} from '../../support/helper'; 
import * as user from '../../fixtures/user.json';
import * as product from '../../fixtures/product.json';

it(`test`, () => {

    headlessLogin(user);
    searchProductByName('e', product.name);
    orderProductByUser(product, user);
    
})