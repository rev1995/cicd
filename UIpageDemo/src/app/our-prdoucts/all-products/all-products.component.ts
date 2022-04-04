import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import ProductsJsonFiles from '../../our-prdoucts/ProductsJsonFiles.json'
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  public records = ProductsJsonFiles;
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
