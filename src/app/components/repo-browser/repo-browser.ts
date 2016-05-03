import {Component} from "@angular/core";
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";

import {RepoListComponent} from "../repo-list/repo-list";
import {GitHub} from "../../services/github";

@Component({
  selector: "repo-browser",
  templateUrl: "app/components/repo-browser/repo-browser.html",
  styleUrls: ["app/components/repo-browser/repo-browser.css"],
  providers: [GitHub],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@Routes([
  {path: "/:org", component: RepoListComponent},
])
export class RepoBrowserComponent {

  constructor(private router: Router, private github: GitHub) {
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigateByUrl(`/repo/${orgName}`);
      });
  }
}
