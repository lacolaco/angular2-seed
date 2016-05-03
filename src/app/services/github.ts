import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";

export const GITHUB_API_BASE_URL = "https://api.github.com";

@Injectable()
export class GitHub {
  constructor(private http: Http) {
  }

  getOrg(org: string) {
    return this.makeRequest(`orgs/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set("per_page", "100");

    let url = `${GITHUB_API_BASE_URL}/${path}`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
