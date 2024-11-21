import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import {getUser} from "../../utils/getUser.js";


// No hay usuario sin tarjetas

describe("Active Products", () => {
  before(async () => {
    const user2 = getUser("user2")
    await loginPage.login(user2.email, user2.password, user2.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 20000 });
  });
  it("should display all active products", async () => {
    //await browser.pause(9000);
    const elements = HomePage.getAllHomeDetails();
    for (const element of elements) {
      await expect(element).not.toExist();
    }
  });
});
