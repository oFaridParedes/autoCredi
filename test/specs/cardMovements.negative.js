import { expect } from "@wdio/globals";
import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import cardDetails from "../pageobjects/CardDetails.js";
import { getUser } from "../../utils/getUser.js";

describe("Negative test for Card Movements", () => {
  before(async () => {
    const user2 = getUser("user2");
    await loginPage.login(user2.email, user2.password, user2.pais);
    await HomePage.headerCard.waitForDisplayed({ timeout: 30000 });
  });
  it("should not display card movements", async () => {
    await HomePage.clickHeaderCard();
    await browser.pause(5000);
    await cardDetails.clickCardMovementsButton();
    await browser.pause(5000);
    const noCardMovements = $('(//*[@text="No se encontraron \nmovimientos"])');
    await expect(noCardMovements).toHaveText("No se encontraron \nmovimientos");
  });
});
