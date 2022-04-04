import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-prdoucts',
  templateUrl: './our-prdoucts.component.html',
  styleUrls: ['./our-prdoucts.component.scss']
})
export class OurPrdouctsComponent implements OnInit {
  mycrate : string = "/Cardsback.jpg"
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
