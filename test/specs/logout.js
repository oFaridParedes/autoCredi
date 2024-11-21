import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import { $ } from "@wdio/globals";
import { getUser } from "../../utils/getUser.js";

describe("Logout flow", () => {
  it("should logout and redirect to login page", async () => {
    const user2 = getUser("user2");
    await loginPage.login(user2.email, user2.password, user2.pais);
    await browser.pause(20000);
    await HomePage.clickProfileIcon();
    await browser.pause(3000);
    const elem = await $('//*[@text="País"]');
    await elem.dragAndDrop({ x: 0, y: -110 });
    await browser.pause(3000);
    await HomePage.clickLogoutIcon();
    await browser.pause(3000);
    const text = await HomePage.logoutText.getText();
    await expect(text).toContain("cerrar sesión");
    await HomePage.clickLogoutButton();
  });
});