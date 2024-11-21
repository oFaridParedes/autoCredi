import { expect } from "@wdio/globals";
import { $ } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import cardDetails from "../pageobjects/CardDetails.js";
import {getUser} from "../../utils/getUser.js";

describe("Account State", () => {
  before(async () => {
    const user1 = getUser("user1")
    await loginPage.login(user1.email, user1.password, user1.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 20000 });
    await HomePage.clickHeaderCard();
    await browser.pause(9000);
  });

  it("should open the account state", async () => {
    await cardDetails.baseCardDetailsButton.waitForEnabled({
      timeout: 20000,
    });
    await browser.pause(9000);
    await cardDetails.clickAccountStateButton();
    await browser.pause(9000);
    await $(
      '(//*[@resource-id="com.credisiman.mobile:id/seeDetail"])[1]'
    ).click();
    const elements = [
      $('//*[@resource-id="com.credisiman.mobile:id/btn_see"]'),
      $('//*[@resource-id="com.credisiman.mobile:id/btn_download"]'),
    ];
    for (const element of elements) {
      await expect(element).toExist();
    }
  });
});
