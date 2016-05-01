import {assert} from "../../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {RepoBrowserComponent} from "./repo-browser";
import {provide} from "angular2/core";
import {ROUTER_FAKE_PROVIDERS} from "angular2/src/alt_router/router_testing_providers";
import {GitHub} from "../../services/github";

class MockGitHub {
}

describe("RepoBrowserComponent", () => {

  beforeEachProviders(() => [
    ...ROUTER_FAKE_PROVIDERS,
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(RepoBrowserComponent, require("./repo-browser.html"))
      .overrideProviders(RepoBrowserComponent, [
        provide(GitHub, {useClass: MockGitHub})
      ]);
  }));

  it("can create", async(
    () => {
      builder.createAsync(RepoBrowserComponent);
    })
  );
});
