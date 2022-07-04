import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import ProductsJsonFiles from '../../our-prdoucts/ProductsJsonFiles.json'
import ProductTypesJson from '../../our-prdoucts/ProductTypes.json'
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
  public selected_records = ProductsJsonFiles;
  public product_type_records = ProductTypesJson;
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

  displayStyle = "none";
  s = "none";

  selectedImageIndex: number = 0;

  selected_product = {"Name": "Product Name", "product_info": [], "product_title": "", "product_description": "", "icon": ""};
  selected_product_type = {"product_type_name": "", "product_type_key": ""}

  product_type_selected = false;
  product_type_l1_selected = false;
  product_type_l2_selected = false;
  product_type_key_selected = "";
  product_type_key_l1_selected = "";
  product_type_key_l2_selected = "";

  openPopup(item: any) {
    this.selectedImageIndex = 0;
    this.displayStyle = "block";
    this.selected_product = item;
  }
  closePopup() {
    this.displayStyle = "none";
  }

  selectProductType(item: any){
    this.product_type_selected = true;
    this.product_type_key_selected = item["product_type_key"];
    if (item["product_type_key"] === "") {
      this.product_type_l1_selected = false;
    }
  }

  selectProductTypeL1(item: any){
    this.product_type_l2_selected = false;
    this.product_type_l1_selected = true;
    this.product_type_key_l2_selected = item["product_type_key"];
    this.product_type_key_l1_selected = item["product_type_key"];
    if (!item.hasOwnProperty('children')) {
      this.product_type_l2_selected = false;
    }
  }

  selectProductTypeL2(item: any){
    this.product_type_l2_selected = true;
    this.product_type_key_l2_selected = item["product_type_key"];
  }

  changeProductImage(selected_product: any){
    if (this.selectedImageIndex < selected_product["icon"].length){
      this.selectedImageIndex ++;
    }else{
      this.selectedImageIndex = 0;
    }

    this.filterProductType(selected_product);

  }

  filterProductType(item: any) {
    this.selected_records = this.records; 
    console.log("---2---", this.selected_records);
    console.log("---2a---", item['product_type'], "---", this.selected_product_type['product_type_key'])
    if (item['product_type'] == this.selected_product_type['product_type_key'] || this.selected_product_type['product_type_key'] == '') {
      for (let i = 0; i < this.selected_records.length; i++){
        console.log("---3---", this.selected_product_type['product_type_key'], "----", this.selected_records[i]["product_type"]);
        if (this.selected_product_type['product_type_key'] != '' && this.selected_records[i]["product_type"]){
          this.selected_records.splice(i, 1);
          console.log("---4---", this.selected_records);
        }
      }
      console.log("---5---", this.selected_records);
      return true;
    }
    return false;
  }
}
