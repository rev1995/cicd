import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UIpageDemo';
  constructor(private scroller: ViewportScroller, private router: Router) { }
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  
}

