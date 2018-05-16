import { enableProdMode, isDevMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

import "./style.scss";

if (process.env.NODE_ENV === "production") {
  if (!window["enableProdMode"]) {
    enableProdMode();
    window["enableProdMode"] = true;
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(res => {
    destoryNgRef();
    (<any>window)["ngRef"] = res;
  })
  .catch(err => console.log(err));

function destoryNgRef() {
  let { ngRef } = window as any;
  if (ngRef) {
    ngRef.destory();
    window["ngRef"] = null;
  }
}
