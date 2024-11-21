import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import ErrorPages from "../pageobjects/ErrorPages.js";


describe("Negative test for login", () => {
  it("should not login with valid credentials", async () => {
    await loginPage.login("wrong@user.com", "wrong@password.com");
    await browser.pause(5000);
    const errorText = ErrorPages.serverError;
    await expect(errorText).toHaveText("Error del servidor");
  });
});
