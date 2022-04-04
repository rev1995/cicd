import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
