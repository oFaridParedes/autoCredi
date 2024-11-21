import { $ } from "@wdio/globals";

class LoginPage {
  get username() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/userTextInputEditText"]'
    );
  }

  get password() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/passwordTextInputEditText"]'
    );
  }

  get loginButton() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/btnConfirmCredentials"]'
    );
  }

  get ElSalvadorOption() {
    return $('(//*[@resource-id="com.credisiman.mobile:id/radioButton"])[1]');
  }

  get guatemalaOption() {
    return $('(//*[@resource-id="com.credisiman.mobile:id/radioButton"])[2]');
  }

  get nicaraguaOption() {
    return $('(//*[@resource-id="com.credisiman.mobile:id/radioButton"])[3]');
  }

  get costaRicaOption() {
    return $('(//*[@resource-id="com.credisiman.mobile:id/radioButton"])[4]');
  }

  get continueButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/btn_continue"]');
  }

  get forgotPasswordOption() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tv_forgot_password"]');
  }

  get codeLoginButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvCodeLogin"]');
  }

  get confirmCredentials() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/btnConfirmCredentials"]'
    );
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

  get emailInput() {
    return $('//*[@resource-id="com.credisiman.mobile:id/textInput_email"]');
  }

  get changePasswordInput() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/textInput_change_password"]'
    );
  }

  get confirmPasswordInput() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/textInput_change_password_confirm"]'
    );
  }

  get passwordChangedMessage() {
    return $('//*[@text="Tu contraseña ha sido actualizada"]');
  }

  get guestModeButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvGustMode"]');
  }

  get registerButton() {
    return $(
      '//*[@resource-id="com.credisiman.mobile:id/tvRegisterSecondtPart"]'
    );
  }

  async enterOtp() {
    await this.firstOtp.setValue("0");
    await this.secondOtp.setValue("0");
    await this.thirdOtp.setValue("0");
    await this.fourthOtp.setValue("0");
    await this.fifthOtp.setValue("0");
    await this.sixthOtp.setValue("0");
  }

  async login(username, password, countryCode) {
    await this.selectCountry(countryCode);
    await this.username.setValue(username);
    await this.password.clearValue();
    await this.password.setValue(password);
    await this.loginButton.click();
  }

  async codeLogin(username, countryCode) {
    //await this.ElSalvadorOption.click();
    await this.selectCountry(countryCode);
    //await this.continueButton.click();
    await this.codeLoginButton.click();
    await this.username.setValue(username);
    await this.confirmCredentials.click();
    await this.enterOtp();
  }

  async forgotPassword(username, password) {
    await this.ElSalvadorOption.click();
    await this.continueButton.click();
    await this.forgotPasswordOption.click();
    await this.emailInput.setValue(username);
    await this.continueButton.click();
    await this.enterOtp();
    await this.changePasswordInput.setValue(password);
    await this.confirmPasswordInput.setValue(password);
    await this.continueButton.click();
  }

  async guestMode() {
    await this.ElSalvadorOption.click();
    await this.continueButton.click();
    await this.guestModeButton.click();
  }

  async selectCountry(countryCode) {
    switch (countryCode) {
      case "SV":
        await this.ElSalvadorOption.click();
        break;
      case "GT":
        await this.guatemalaOption.click();
        break;
      case "NI":
        await this.nicaraguaOption.click();
        break;
      case "CR":
        await this.costaRicaOption.click();
        break;
      default:
        throw new Error(`Country code ${countryCode} is not supported`);
    }
    await this.continueButton.click();
  }

  async registerForm(countryCode) {
    await this.selectCountry(countryCode);
    await this.registerButton.click();
  }
}

export default new LoginPage();
