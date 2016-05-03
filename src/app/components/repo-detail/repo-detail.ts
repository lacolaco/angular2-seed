import {Component} from "@angular/core";
import {RouteSegment, ROUTER_DIRECTIVES, OnActivate, Tree} from "@angular/router";
import {GitHub} from "../../services/github";

@Component({
  selector: "repo-detail",
  templateUrl: "app/components/repo-detail/repo-detail.html",
  styleUrls: ["app/components/repo-detail/repo-detail.css"],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoDetailComponent implements OnActivate {
  repoDetails = {};

  constructor(public github: GitHub) {
  }

  routerOnActivate(curr: RouteSegment, prev: any, currTree: Tree<RouteSegment>) {
    let orgSegment = currTree.parent(curr);
    this.github.getRepoForOrg(orgSegment.getParam("org"), curr.getParam("name"))
      .subscribe(
        repoDetails => {
          this.repoDetails = repoDetails;
        },
        error => {
          console.error(error);
        });
  }

}
