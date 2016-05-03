import {assert} from "../../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {AboutComponent} from "./about";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, Http} from "@angular/http";
import {provide} from "@angular/core";

describe("AboutComponent", () => {

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(AboutComponent, require("./about.html"));
  }));

  it("can create", async(
    inject([], () => {
      builder.createAsync(AboutComponent);
    }))
  );

  it("has expected view", async(
    inject([], () => {
      builder
        .createAsync(AboutComponent)
        .then(fixture => {
          assert.equal(fixture.debugElement.nativeElement.innerHTML, `<h3>About Component</h3>
<p>This is the about component!</p>`);
        });
    }))
  );
});
