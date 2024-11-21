import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import GuestMode from "../pageobjects/GuestMode.js";

describe('Guest mode',  () => {
    it('should have access to promotions, payment locations and contact us', async () => {
        await loginPage.guestMode();
        await browser.pause(3000);
        const elements = GuestMode.getAllGuestModeOptions();
        for (const element of elements) {
            await expect(element).toExist();
        }
    });
});