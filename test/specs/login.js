import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import {getRandomUser} from "../../utils/getRandomUser.js";

describe("Login flow", () => {
  it("should login with valid credentials", async () => {

    const randomUser = getRandomUser('SV', "login");

    await loginPage.login(randomUser.email, randomUser.password, randomUser.pais);

    await HomePage.welcomeMessage.waitForDisplayed({
      timeout: 20000,
      timeoutMsg: "Welcome message was not displayed after 20 seconds"
    });

    const text = await HomePage.welcomeMessage.getText();
    await expect(text).toContain("Hola");
  });
});