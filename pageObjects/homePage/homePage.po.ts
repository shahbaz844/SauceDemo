import {BasePage} from "../base/basePage";

export class HomePagePo extends BasePage {
    private readonly productCard = '[class="inventory_item"]';
    private readonly addToCartBtn = 'button[data-test*="add-to-cart"]';
    private readonly shoppingCart = '[id="shopping_cart_container"]';

    getProduct(productName: string) {
        return this.getElement(this.productCard).filter(`:contains("${productName}")`);
    }

    getAddToCartBtn(productName: string) {
        return this.getProduct(productName).find(this.addToCartBtn);
    }

    addProductToCart(productName: string) {
        this.getAddToCartBtn(productName).click();
    }

    goToCart() {
        this.click(this.shoppingCart);
    }
}
