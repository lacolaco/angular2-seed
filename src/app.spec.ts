import "zone.js/dist/async-test";
import "rxjs/add/operator/toPromise";

import {assert} from "./test_util";
import {describe, it} from "angular2-testing-lite/mocha";
import {resetBaseTestProviders, setBaseTestProviders} from "angular2-testing-lite/core";
import {TEST_BROWSER_APPLICATION_PROVIDERS, TEST_BROWSER_PLATFORM_PROVIDERS} from "angular2/platform/testing/browser";

resetBaseTestProviders();
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

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
