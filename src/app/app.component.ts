import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";

  showApp1() {
    this.showApp("app1");
  }

  showApp2() {
    this.showApp("app2");
  }

  showApp3() {
    this.showApp("app3");
  }

  showApp4() {
    this.showApp("app4");
  }

  showApp(path: string) {
    let script = document.createElement("script");
    script.src =
      "https://meepo.com.cn/elements/" +
      path +
      "/app.js?t=" +
      new Date().getTime();
    script.onload = () => {};
    document.body.appendChild(script);
  }
}
