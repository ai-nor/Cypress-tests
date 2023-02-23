///<reference types="cypress"/>
import * as user from '../../fixtures/user.json';
import loginPage from '../../support/pages/Loginpage';
import Accountpage from '../../support/pages/Accountpage';

it(`Authorization form`, () => {
loginPage.visit();
loginPage.submitLoginform(user);

Accountpage.verifyUser(user);

})
