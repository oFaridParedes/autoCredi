import { $ } from "@wdio/globals";

class HomePage {
  get welcomeMessage() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvTopWelcome"]');
  }

  get headerCard() {
    return $('//*[@resource-id="com.credisiman.mobile:id/ivActionArrow"]');
  }

  get cardName() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvCardTitle"]');
  }

  get availableBalance() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvBalanceAvailableTitle"]');
  }

  get balanceToPay() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvBalanceToPayTitle"]');
  }

  get balanceLimit() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvBalanceLimitTitle"]');
  }

  get cardStatus() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tvCardNumberStatus"]');
  }

  get logoutIcon() {
    return $('//*[@resource-id="com.credisiman.mobile:id/logout"]');
  }

  get logoutText() {
    return $('//*[@text="¿Está seguro que desea cerrar sesión? Tendrás que ingresar nuevamente tus credenciales"]');
  }

  get logoutButton() {
    return $('//*[@resource-id="com.credisiman.mobile:id/btnLogout"]');
  }

  get profileIcon() {
    return $('(//*[@resource-id="com.credisiman.mobile:id/navigation_bar_item_icon_view"])[3]');
  }

  async clickHeaderCard() {
    await this.headerCard.click();
  }

  async clickProfileIcon() {
    await this.profileIcon.click();
  }

  getAllHomeDetails() {
    return [
      this.cardName,
      this.availableBalance,
      this.balanceToPay,
      this.balanceLimit,
      this.cardStatus,
    ];
  }

  async clickLogoutIcon() {
    await this.logoutIcon.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}
export default new HomePage();
