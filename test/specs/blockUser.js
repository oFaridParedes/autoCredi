import loginPage from "../pageobjects/LoginPage.js";
import { $ } from "@wdio/globals";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe('Block user', () => {
    it('should block a user ', async () => {

        const randomUser = getRandomUser("NI", "blockUser")

        await loginPage.selectCountry(randomUser.pais);
        await loginPage.username.setValue("zonnepouppaulu-3164@yopmail.com");
        await loginPage.password.setValue("WrongPwd123456*");
        for (let i = 0; i < 5; i++) {
            try {
                const isButtonDisplayed = await loginPage.loginButton.isDisplayed();

                if (isButtonDisplayed) {
                    await loginPage.loginButton.click();
                    console.log(`Click ${i + 1} realizado`);
                } else {
                    console.log(`El botón no está disponible en el intento ${i + 1}`);
                    break; // Sale del bucle si el botón no está visible
                }

            } catch (error) {
                console.log(`Error en el intento ${i + 1}:`, error.message);
        break; 
            }
            await browser.pause(1000)
        }
        await browser.pause(5000)
        const blockedText = await $('//*[@text="Usuario bloqueado"]').getText();
        await expect(blockedText).toContain("Usuario bloqueado");

    });
});