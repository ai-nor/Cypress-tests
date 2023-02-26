///<reference types="cypress"/>
import * as user from '../../fixtures/user.json';
import LoginPage from '../../support/pages/Loginpage';
import Accountpage from '../../support/pages/Accountpage';

it(`Authorization form`, () => {
LoginPage.visit();
LoginPage.submitLoginform(user);

Accountpage.verifyUser(user);

})
