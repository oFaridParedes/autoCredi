import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import cardDetails from "../pageobjects/CardDetails.js";
import { getUser } from "../../utils/getUser.js";

describe("Product Details", () => {
  before(async () => {
    const user2 = getUser("user2")
    await loginPage.login(user2.email, user2.password, user2.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 20000 });
  });

  //No hay usuario sin tarjetas

  it("should display all payment details", async () => {
    await HomePage.clickHeaderCard();
    await cardDetails.baseCardDetailsButton.waitForEnabled({ timeout: 20000 });
    await browser.pause(9000);
    await cardDetails.clickCardDetailsButton();
    await browser.pause(9000);

    const elem = await $(
      '//*[@resource-id="com.credisiman.mobile:id/tvMinPaymentExpired"]'
    );
      await expect(elem).not.toExist();

  });
});