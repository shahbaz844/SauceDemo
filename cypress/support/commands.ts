import {LoginPage} from "../../pageObjects/loginPage/loginPage.po";

const loginPage = new LoginPage()

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit("/");
    loginPage.addUsername(username);
    loginPage.addPassword(password);
    loginPage.login();
})

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>
        }
    }
}
