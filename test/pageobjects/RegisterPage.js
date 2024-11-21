import { $ } from "@wdio/globals";

class RegisterPage {
  get documentDropdown() {
    return $('//*[@content-desc="Show dropdown menu"]');
  }
  get duiOption() {
    return $('//*[@resource-id="com.credisiman.mobile:id/inputEditTextIdNum"]');
  }

  get documentNumber() {
    return $('//*[@resource-id="com.credisiman.mobile:id/inputEditTextIdNum"]');
  }

  get lastFourDigits() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/inputEditTextCardNum"]'
    );
  }

  get checkBox() {
    return $('//*[@resource-id="com.credisiman.mobile:id/checkBox"]');
  }

  get continueButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/btnCheckUser"]');
  }

  get passwordInput() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/txtInputEditTextPassword"]'
    );
  }

  get confirmPasswordInput() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/txtInputEditTextPasswordTwo"]'
    );
  }

  get loginButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/btnGoToLogin"]');
  }

  get firstOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditOne"]');
  }

  get secondOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditTwo"]');
  }

  get thirdOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditThree"]');
  }

  get fourthOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditFour"]');
  }

  get fifthOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditFive"]');
  }

  get sixthOtp() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInputEditSix"]');
  }


  async selectDui() {
    await this.documentDropdown.click();
    await this.duiOption.click();
  }

  async enterDocumentNumber(number) {
    await this.documentNumber.setValue(number);
  }

  async enterOtp() {
    await this.firstOtp.setValue("0");
    await this.secondOtp.setValue("0");
    await this.thirdOtp.setValue("0");
    await this.fourthOtp.setValue("0");
    await this.fifthOtp.setValue("0");
    await this.sixthOtp.setValue("0");
  }
}

export default new RegisterPage();
