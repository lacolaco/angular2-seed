import {assert} from "../../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {RepoDetailComponent} from "./repo-detail";
import {provide} from "@angular/core";
import {By} from "@angular/platform-browser";
import {GitHub} from "../../services/github";

class MockGitHub {
}

describe("RepoDetailComponent", () => {

  beforeEachProviders(() => [
    provide(GitHub, {useClass: MockGitHub})
  ]);

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideTemplate(RepoDetailComponent, require("./repo-detail.html"));
  }));

  it("can create", async(
    () => {
      builder.createAsync(RepoDetailComponent);
    })
  );

  it("shows repo name in h2", async(
    () => {
      builder.createAsync(RepoDetailComponent)
        .then(fixture => {
          // <h2>{{ repoDetails.full_name }}</h2>
          (<RepoDetailComponent>fixture.componentInstance).repoDetails = {id: "test", full_name: "test"};
          fixture.detectChanges();
          let header = fixture.debugElement.query(By.css("h2"));
          assert.equal(header.nativeElement.innerHTML, "test");
        });
    })
  );
});
