import loginPage from "../pageobjects/LoginPage.js";
import RegisterPage from "../pageobjects/RegisterPage.js";
import { $ } from "@wdio/globals"
import HomePage from "../pageobjects/HomePage.js";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe("Register form", () => {
  it("should register a new user", async () => {

    const randomUser = getRandomUser('SV', 'register');

    await loginPage.registerForm(randomUser.pais);
    await RegisterPage.selectDui();
    await RegisterPage.enterDocumentNumber(randomUser.numeroDocumento);
    await RegisterPage.lastFourDigits.setValue(randomUser.ultimos4DigitosTarjeta);
    await RegisterPage.checkBox.click();
    await RegisterPage.continueButton.click();
    await RegisterPage.passwordInput.waitForDisplayed({ timeout: 20000 });
    await RegisterPage.passwordInput.setValue(randomUser.password);
    await RegisterPage.confirmPasswordInput.setValue(randomUser.password);
    await $('//*[@resource-id="com.credisiman.mobile:id/btnContinue"]').click();
    await browser.pause(15000);
    await RegisterPage.enterOtp();
    await RegisterPage.loginButton.click();
    await loginPage.username.setValue(randomUser.numeroDocumento);
    await loginPage.password.setValue(randomUser.password);
    await loginPage.loginButton.click();
    await browser.pause(10000);
    const text = await HomePage.welcomeMessage.getText();
    await expect(text).toContain("Hola");
  });
});
