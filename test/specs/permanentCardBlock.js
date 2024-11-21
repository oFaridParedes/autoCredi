import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import CardDetails from "../pageobjects/CardDetails.js";
import { $ } from "@wdio/globals";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe('Temporal Card Block', () => {
    it('Should block the card temporally', async () => {

        const randomUser = getRandomUser("SV", "permanentCardBlock")

        await loginPage.login(randomUser.email, randomUser.password, randomUser.pais);
        await browser.pause(12000);
        await HomePage.clickHeaderCard();
        await CardDetails.clickBlockCardButton();
        await browser.pause(6000);
        await $('//*[@resource-id="com.credisiman.mobile:id/msForeverBlock"]').click();
        await browser.pause(8000);
        await $('//*[@text="Extravío"]').click();
        await $('//*[@resource-id="com.credisiman.mobile:id/btnForeverBlockDoIt"]').click();
        const text = await $('//*[@resource-id="com.credisiman.mobile:id/tvForeverBlockMsg"]').getText();
        await expect(text).toContain("Tu tarjeta esta bloqueada");
    });
});