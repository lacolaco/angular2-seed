// Vendors
// import 'rxjs/Rx';
import "rxjs/add/operator/catch";

import {LocationStrategy, HashLocationStrategy} from "angular2/platform/common";
import {bootstrap} from "angular2/platform/browser";
import {provide} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/alt_router";

import {AppRootComponent} from "./app/app-root";


bootstrap(AppRootComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));
