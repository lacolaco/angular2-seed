import "zone.js/dist/async-test";
import "rxjs/add/operator/toPromise";

import {assert} from "./test_util";
import {describe, it} from "angular2-testing-lite/mocha";
import {resetBaseTestProviders, setBaseTestProviders} from "angular2-testing-lite/core";
import {TEST_BROWSER_STATIC_PLATFORM_PROVIDERS, ADDITIONAL_TEST_BROWSER_PROVIDERS} from "@angular/platform-browser/testing/browser_static";
import {BROWSER_APP_DYNAMIC_PROVIDERS} from "@angular/platform-browser-dynamic";

resetBaseTestProviders();
setBaseTestProviders(TEST_BROWSER_STATIC_PLATFORM_PROVIDERS, [BROWSER_APP_DYNAMIC_PROVIDERS, ADDITIONAL_TEST_BROWSER_PROVIDERS]);

describe("dummy", () => {
  it("dummy", () => {
    assert.ok(true);
  });
});

import "./app/app-root.spec";
import "./app/components/about/about.spec";
import "./app/components/home/home.spec";
import "./app/components/repo-browser/repo-browser.spec";
import "./app/components/repo-detail/repo-detail.spec";
import "./app/components/repo-list/repo-list.spec";
import "./app/services/github.spec";
