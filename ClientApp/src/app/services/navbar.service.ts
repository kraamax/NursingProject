import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  visibleSideBar = new Subject<boolean>();
  visibleNavBar = new Subject<boolean>();


  constructor() {
    this.visibleSideBar.next(false);
    this.visibleNavBar.next(false);

  }
  hideSideBar() {
    this.visibleSideBar.next(false);
  }
  showSideBar() {
    this.visibleSideBar.next(true);
  }
  hideNavBar() {
    this.visibleNavBar.next(false);
  }
  showNavBar() {
    this.visibleNavBar.next(true);
  }
  
}
