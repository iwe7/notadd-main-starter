import { Component } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, tap } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";

  constructor(public router: Router) {
    this.router.events
      .pipe(filter(res => res instanceof NavigationEnd))
      .subscribe((res: any) => {
        this.showApp(res.url);
      });
  }
  showApp(path: string) {
    let script = document.createElement("script");
    script.src =
      "https://meepo.com.cn/elements" +
      path +
      "/app.js?t=" +
      new Date().getTime();
    script.onload = () => {};
    document.body.appendChild(script);
  }
}
