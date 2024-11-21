import { $ } from "@wdio/globals";

class ProvitionalCard {
  get checkBox() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/checkBoxTermsAndConditions"]'
    );
  }

  get generateButton() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/btn_generated_provitional_card"]'
    );
  }

  get correlativeNumber() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/tv_number_correlative"]'
    );
  }

  get expirationDate() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tv_expitated"]');
  }

  get cardNumber() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tv_card_number"]');
  }

  get cardHolder() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tv_name"]');
  }

  async clickGenerateButton() {
    await this.generateButton.click();
  }

  async clickCheckBox() {
    await this.checkBox.click();
  }

  getAllProvitionalCardData() {
    return [
      this.correlativeNumber,
      this.expirationDate,
      this.cardNumber,
      this.cardHolder,
    ];
  }
}

export default new ProvitionalCard();
