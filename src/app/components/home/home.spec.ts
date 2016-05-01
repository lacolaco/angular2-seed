import {assert} from "../../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {HomeComponent} from "./home";

describe("HomeComponent", () => {

  beforeEachProviders(() => [
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(HomeComponent, require("./home.html"));
  }));

  it("can create", async(
    inject([], () => {
      builder.createAsync(HomeComponent);
    }))
  );

  it("has expected view", async(
    inject([], () => {
      builder
        .createAsync(HomeComponent)
        .then(fixture => {
          assert.equal(fixture.debugElement.nativeElement.innerHTML, `<h3>Home Component</h3>
<p>Welcome to Angular Seed</p>`);
        });
    }))
  );
});
