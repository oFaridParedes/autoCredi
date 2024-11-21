import { $ } from "@wdio/globals";

class ErrorPages {
    get serverError() {
        return $('//*[@resource-id="com.credisiman.mobile:id/tvErrorTitle"]');
    }
}

export default new ErrorPages();