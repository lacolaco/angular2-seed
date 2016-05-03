import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

import {HomeComponent} from "./components/home/home";
import {AboutComponent} from "./components/about/about";
import {RepoBrowserComponent} from "./components/repo-browser/repo-browser";

@Component({
  selector: "app-root",
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: "app/app-root.html",
})
@Routes([
  {path: "/home", component: HomeComponent},
  {path: "/about", component: AboutComponent},
  {path: "/repo", component: RepoBrowserComponent},
])
export class AppRootComponent {

  constructor() {
  }

}
