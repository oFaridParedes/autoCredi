import { $ } from "@wdio/globals";

class GuestMode {
  get promotionsOption() {
    return $('//*[@text="Promociones"]');
  }

  get paymentLocationsOption() {
    return $('//*[@text="Lugares de pago"]');
  }

  get contactUsOption() {
    return $('//*[@text="Contáctenos"]');
  }

  getAllGuestModeOptions() {
    return [
      this.promotionsOption,
      this.paymentLocationsOption,
      this.contactUsOption,
    ];
  }
}

export default new GuestMode();
