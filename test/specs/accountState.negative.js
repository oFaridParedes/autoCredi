import { expect } from "@wdio/globals";
import { $ } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import cardDetails from "../pageobjects/CardDetails.js";
import ErrorPages from "../pageobjects/ErrorPages.js";
import {getUser} from "../../utils/getUser.js";

describe("Negative Test for Account State", () => {
  before(async () => {
    const user1 = getUser("user2")
    await loginPage.login(user1.email, user1.password, user1.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 20000 });
    await HomePage.clickHeaderCard();
    await browser.pause(9000);
  });

  it("should not show the account state details button", async () => {
    await cardDetails.baseCardDetailsButton.waitForEnabled({
      timeout: 20000,
    });
    await browser.pause(9000);
    await cardDetails.clickAccountStateButton();
    await browser.pause(9000);
    const noAccountState = ErrorPages.serverError;
    await expect(noAccountState).toHaveText("Error del servidor");
  });
});
