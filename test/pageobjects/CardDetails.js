import { $ } from "@wdio/globals";

class CardDetails {
  get baseCardDetailsButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivAllDetailsArrow"]');
  }

  get baseCardMovementsButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivMovementsGoArrow"]');
  }

  get baseAccountStateButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivcvAccountStateGoArrow"]');
  }

  get provitionalCardButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivProvitionalCardGoArrow"]');
  }

  get blockCardButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivBlockCardGoArrow"]');
  }

  get permaBlockCardButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivPermaBlockCardGoArrow"]');
  }

  get cardNumber() {
    return $("//*[@resource-id='com.credisiman.mobile:id/tvCardNumberTitle']");
  }

  get minimumPayment() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvMinPayment"]');
  }

  get fullPayment() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvFullPayment"]');
  }

  get minmumPaymentExpired() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/tvMinPaymentExpired"]'
    );
  }

  get paymentLimitDate() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/tvPaymentLimitDateTitle"]'
    );
  }

  get reservedFunds() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvReservedFunds"]');
  }

  get lastCutDate() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvLastCutDateTitle"]');
  }

  async clickCardDetailsButton() {
    await this.baseCardDetailsButton.click();
  }
  
  async clickCardMovementsButton() {
    await this.baseCardMovementsButton.click();
  }

  async clickAccountStateButton() {
    await this.baseAccountStateButton.click();
  }

  getAllCardDetails() {
    return [
      this.cardNumber,
      this.minimumPayment,
      this.fullPayment,
      this.minmumPaymentExpired,
      this.paymentLimitDate,
      this.reservedFunds,
      this.lastCutDate,
    ];
  }

  async clickProvitionalCardButton() {
    await this.provitionalCardButton.click();
  }

  async clickBlockCardButton() {
    await this.blockCardButton.click();
  }

  async clickPermaBlockCardButton() {
    await this.permaBlockCardButton.click();
  }
}
export default new CardDetails();
