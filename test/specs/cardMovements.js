import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import cardDetails from "../pageobjects/CardDetails.js";
import { getUser } from "../../utils/getUser.js";


describe("Card Movements", () => {
  before(async () => {
    const user3 = getUser("user3");
    await loginPage.login(user3.email, user3.password, user3.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 30000 });
  });
  it("should display all card movements", async () => {
    await HomePage.clickHeaderCard();
    //await browser.pause(20000);
    await cardDetails.baseCardMovementsButton.waitForDisplayed({ timeout: 20000 });
    await cardDetails.clickCardMovementsButton();
    await browser.pause(10000);
    await $(
      '(//*[@resource-id="com.credisiman.mobile:id/seeDetail"])[1]'
    ).click();
    const elements = [
      $('//*[@text="Lugar"]'),
      $('//*[@text="Fecha y hora"]'),
      $('//*[@text="Gestión"]'),
    ];
    for (const element of elements) {
      await expect(element).toExist();
    }
    await $('//*[@resource-id="com.credisiman.mobile:id/btn_back"]').click();
  });
});

