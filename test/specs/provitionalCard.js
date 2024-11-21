import loginPage from "../pageobjects/LoginPage.js";
import HomePage from "../pageobjects/HomePage.js";
import CardDetails from "../pageobjects/CardDetails.js";
import ProvitionalCard from "../pageobjects/ProvitionalCard.js";
import { getRandomUser } from "../../utils/getRandomUser.js";

describe("Provitional Card", () => {
  it("should generate a provitional card", async () => {
    const user = getRandomUser('SV', 'provitionalCardsUsers')
    await loginPage.login(user.email, user.password, user.pais);
    await browser.pause(10000);
    await HomePage.clickHeaderCard();
    await CardDetails.clickProvitionalCardButton();
    await ProvitionalCard.clickCheckBox();
    await ProvitionalCard.clickGenerateButton();
    const elements = ProvitionalCard.getAllProvitionalCardData();
    for (const element of elements) {
      await expect(element).toExist();
    }
  });
});
