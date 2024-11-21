import { $ } from "@wdio/globals";

class Profile {
  get emailField() {
    return $('//*[@resource-id="com.credisiman.mobile:id/tv_email"]');
  }
  
}

export default new Profile();