import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import { getUser } from "../../utils/getUser.js";

describe("Forgot password", () => {
  it("should change password and login", async () => {
    const user2 = getUser("user2");
    await loginPage.forgotPassword(user2.email, user2.password);
    const text = await loginPage.passwordChangedMessage.getText();
    await expect(text).toContain("Tu contraseña ha sido actualizada");
  });
});