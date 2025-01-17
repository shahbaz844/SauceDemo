import {HomePagePo} from "../../pageObjects/homePage/homePage.po";
import {HomeTestData} from "../fixtures/testData/homeTestData/homeTestData";
import {CartTestData} from "../fixtures/testData/cartTestData/cartTestData";
import {CartPage} from "../../pageObjects/cart/cartPage.po";
import {CheckoutTestData} from "../fixtures/testData/checkoutTestData/checkoutTestData";

describe('Add Products in Cart and Checkout', () => {

    const homePage = new HomePagePo();
    const cartPage = new CartPage();

    it('add products in cart and checkout', () => {
        /**
         * cy.login() is a custom command created
         * username - environment variable
         * password - environment variable
         */
        cy.login(Cypress.env("LOGIN_USERNAME"), Cypress.env("LOGIN_PASSWORD"));
        cy.url().should('equal', HomeTestData.homePageUrl);

        homePage.addProductToCart(HomeTestData.productBackpack);
        homePage.getAddToCartBtn(HomeTestData.productBackpack).should('not.exist');

        homePage.addProductToCart(HomeTestData.productBikeLight);
        homePage.getAddToCartBtn(HomeTestData.productBackpack).should('not.exist');

        homePage.goToCart();
        cy.url().should('equal', CartTestData.cartPageUrl);
        cartPage.totalItemsInCart().should('have.length', 2);
        cartPage.getItemByName(HomeTestData.productBackpack).should('exist');
        cartPage.getItemByName(HomeTestData.productBikeLight).should('exist');

        cartPage.checkout();
        cy.url().should('equal', CheckoutTestData.checkoutPageUrl);
    });
});
