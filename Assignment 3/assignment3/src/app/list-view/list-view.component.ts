import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor() { }


  items = ['Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5', 'Example 6', 'Example 7'];

  a: any;
  newItem =  '';
  msg: any;
  ngOnInit() {
    // this.initArray(this.items);
  }

  pushItem = function () {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  };
  removeItem = function (index) {
    this.items.splice(index, 1);
    this.initArray(this.items);
  };

  // initArray(len) {
  //   for( let i = 0; i < len.length; i++) {
  //      a[i] = true;
  //   }
  // }


  swipe(i) {
    console.log('swipe left is working');
    this.msg = 'X';
  }
  swipe1() {
    this.msg = '';
  }
}
