import {Component} from "angular2/core";
import {GitHub} from "../../services/github";
import {OnActivate, ROUTER_DIRECTIVES, RouteSegment, Routes} from "angular2/alt_router";
import {RepoDetailComponent} from "../repo-detail/repo-detail";

@Component({
  selector: "repo-list",
  templateUrl: "app/components/repo-list/repo-list.html",
  styleUrls: ["app/components/repo-list/repo-list.css"],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@Routes([
  {path: "/:name", component: RepoDetailComponent},
])
export class RepoListComponent implements OnActivate {
  repos: any[] = [];

  constructor(public github: GitHub) {
  }

  routerOnActivate(curr: RouteSegment) {
    this.github.getReposForOrg(curr.getParam("org"))
      .subscribe(
        repos => {
          this.repos = repos;
        },
        error => {
          console.error(error);
        });
  }
}
