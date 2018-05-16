import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app1";

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
    this.showApp("app3");
  }

  showApp(path: string) {
    let script = document.createElement("script");
    script.src = "https://meepo.com.cn/elements/" + path + "/app.js";
    script.onload = () => {};
    document.body.appendChild(script);
  }
}
