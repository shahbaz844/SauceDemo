import {BasePage} from "../base/basePage";

export class CartPage extends BasePage {
    private readonly cartItem = '[class="cart_item"]';
    private readonly cartItemName = '[class="inventory_item_name"]';
    private readonly checkoutBtn = '[id="checkout"]';

    totalItemsInCart() {
        return this.getElement(this.cartItem);
    }

    getItemByName(productName: string) {
        return this.getElement(this.cartItemName).filter(`:contains("${productName}")`);
    }

    checkout() {
        this.click(this.checkoutBtn);
    }
}
