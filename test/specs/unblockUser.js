import loginPage from "../pageobjects/LoginPage.js";
import { $ } from "@wdio/globals";
import HomePage from "../pageobjects/HomePage.js";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe('Unblock user', () => {
    it('should unblock a user ', async () => {
        const randomUser = getRandomUser('CR', 'unBlockUser')

        await loginPage.login(randomUser.email, randomUser.password, randomUser.pais)

        await loginPage.continueButton.click();
        await loginPage.enterOtp();
        const unblockedText = await $('//*[@text="Tu usuario ha sido desbloqueado"]').getText();
        await expect(unblockedText).toContain("Tu usuario ha sido desbloqueado");
        await $('//*[@resource-id="com.credisiman.mobile:id/btn_go_to_loggin"]').click();
        await loginPage.username.setValue(randomUser.email);
        await loginPage.password.setValue(randomUser.password);
        await loginPage.loginButton.click();
        await HomePage.headerCard.waitForDisplayed({ timeout: 30000 });
        const text = await HomePage.welcomeMessage.getText();
        await expect(text).toContain("Hola");
    });
});