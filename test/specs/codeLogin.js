import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import { getRandomUser } from "../../utils/getRandomUser.js";


describe("Code login flow", () => {
  it("should login with valid OTP", async () => {
    const randomUser = getRandomUser('NI', "register");
    await loginPage.codeLogin(randomUser.email, randomUser.pais);
    await browser.pause(5000);
    const text = await HomePage.welcomeMessage.getText();
    await expect(text).toContain("Hola");
  });
});
