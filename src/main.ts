import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
// import { enableProdMode } from "@angular/core";
// if (process.env.NODE_ENV === "production") {
//   enableProdMode();
// }
import "./style.scss";
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(res => {
    destoryNgRef();
    (<any>window)["ngRef"] = res;
  })
  .catch(err => console.log(err));

function destoryNgRef() {
  if ((<any>window)["ngRef"] && (<any>window)["ngRef"].destory) {
    (<any>window)["ngRef"].destory();
  }
}
