import {Timeout} from "../utils/enums";

export class BasePage {

    getElement(element: string) {
        return cy.get(element, { timeout: Timeout.LONG });
    }

    click(element: string) {
        this.getElement(element).click();
    }

}
