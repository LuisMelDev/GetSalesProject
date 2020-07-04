import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  collapse1 = false;
  collapse2 = false;
  constructor() { }

  ngOnInit() {
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  collapse(num){
    switch(num){
      case 1:  this.collapse1 = !this.collapse1; break;
      case 2:  this.collapse2 = !this.collapse2; break;
      default: break;
    }
  }
}
