import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import CardDetails from "../pageobjects/CardDetails.js";
import { $ } from "@wdio/globals";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe('Temporal Card Block', () => {
    it('Should block the card temporally', async () => {

        const randomUser = getRandomUser('SV', 'temporalCardBlock')

        await loginPage.login(randomUser.email, randomUser.password, randomUser.pais);
        await browser.pause(12000);
        await HomePage.clickHeaderCard();
        await CardDetails.clickBlockCardButton();
        await browser.pause(6000);
        await $('//android.widget.Switch[@resource-id="com.credisiman.mobile:id/msTempBlock"]').click();
        await browser.pause(8000);
        const text = await $('//android.widget.TextView[@resource-id="com.credisiman.mobile:id/tvTempBlockMsg"]').getText();
        await expect(text).toContain("Tu tarjeta esta bloqueada temporalmente");
    });
});