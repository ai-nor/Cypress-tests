///<reference types="cypress"/>
import * as user from '../../fixtures/user.json';
import LoginPage from '../../support/pages/Loginpage';
import RegistrationPage from '../../support/pages/RegistrationPage';
import Accountpage from '../../support/pages/Accountpage';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email();
user.userName = faker.name.firstName();

it(`Authorization form`, () => {
LoginPage.visit();
LoginPage.goToRegistration();

RegistrationPage.submitRegistrationform(user);

Accountpage.verifyNewUser(user);

})
