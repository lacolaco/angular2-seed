import {assert} from "../../test_util";
import {inject, async, TestComponentBuilder} from "angular2-testing-lite/core";
import {beforeEach, beforeEachProviders, it} from "angular2-testing-lite/mocha";
import {GitHub, GITHUB_API_BASE_URL} from "./github";
import {MockBackend} from "angular2/http/testing";
import {BaseRequestOptions, Http, Response, ResponseOptions} from "angular2/http";
import {provide} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {MockConnection} from "angular2/src/http/backends/mock_backend";

describe("HomeComponent", () => {

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    }),
    GitHub
  ]);

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    (<Observable<MockConnection>>backend.connections).subscribe(conn => {
      const path = conn.request.url.replace(GITHUB_API_BASE_URL, "").split("?")[0];
      console.info(path);
      if (path.match(/\/orgs\/[\w]+/)) {
        // /orgs/:name
        conn.mockRespond(new Response(new ResponseOptions({body: {}})));
      } else {
        throw new Error(`invalid path: ${path}`);
      }
    });
  }));

  it("can be injected",
    inject([GitHub], (github: GitHub) => {
      assert.ok(!!github);
    })
  );

  describe("getOrg", () => {

    it("returns observable of org", async(
      inject([GitHub], (github: GitHub) => {
        github.getOrg("foo")
          .subscribe((org: any) => {
            assert.ok(!!org);
          });
      }))
    );
  });
});
