import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import Profile from "../pageobjects/Profile.js";
import { getUser } from "../../utils/getUser.js";

describe('Access to my profile option', () => {
    it('Should have the same login email in profile option', async () => {
        const user2 = getUser("user2")
        await loginPage.login(user2.email, user2.password, user2.pais);
        //await browser.pause(12000);
        await HomePage.headerCard.waitForDisplayed({ timeout: 20000 });
        await HomePage.clickProfileIcon();
        const email = await Profile.emailField.getText();
        await expect(email).toEqual(user2.email);
    });
});