import {assert} from "../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {AppRootComponent} from "./app-root";
import {ROUTER_FAKE_PROVIDERS} from "angular2/src/alt_router/router_testing_providers";

describe("AppRootComponent", () => {

  beforeEachProviders(() => [
    ...ROUTER_FAKE_PROVIDERS
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(AppRootComponent, require("./app-root.html"));
  }));

  it("can create", async(
    inject([], () => {
      builder.createAsync(AppRootComponent);
    }))
  );
});
