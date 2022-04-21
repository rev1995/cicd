import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  goDown1() {
    this.scroller.scrollToAnchor("aboutUS");
  }
  goDown2() {
    this.scroller.scrollToAnchor("whoveare");
  }
  goDown3() {
    this.scroller.scrollToAnchor("Services");
  }
  goDown4() {
    this.scroller.scrollToAnchor("product");
  }
  goDown5() {
    this.scroller.scrollToAnchor("contactUs");
  }

}
