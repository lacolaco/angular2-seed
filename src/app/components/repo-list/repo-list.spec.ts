import {assert} from "../../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {RepoListComponent} from "./repo-list";
import {provide} from "angular2/core";
import {By} from "angular2/platform/browser";
import {GitHub} from "../../services/github";
import {ROUTER_FAKE_PROVIDERS} from "angular2/src/alt_router/router_testing_providers";

class MockGitHub {
}

describe("RepoDetailComponent", () => {

  beforeEachProviders(() => [
    ...ROUTER_FAKE_PROVIDERS,
    provide(GitHub, {useClass: MockGitHub})
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(RepoListComponent, require("./repo-list.html"));
  }));

  it("can create", async(
    () => {
      builder.createAsync(RepoListComponent);
    })
  );

  it("shows repo list as li", async(
    () => {
      builder.createAsync(RepoListComponent)
        .then(fixture => {
          // <li *ngFor="let repo of repos">
          (<RepoListComponent>fixture.componentInstance).repos = [
            {id: 1, name: "test1", owner: {login: "laco"}},
            {id: 2, name: "test2", owner: {login: "laco"}},
          ];
          fixture.detectChanges();
          let items = fixture.debugElement.queryAll(By.css("li"));
          assert.equal(items.length, 2);
        });
    })
  );
});
