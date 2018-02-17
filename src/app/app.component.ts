import { Component } from '@angular/core';
import { Item } from './sp-multi-select-dropdown/model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Item[] = [
    new Item('coffee', {}, true),
    new Item('coke', {}, false),
    new Item('milk', {}, false),
    new Item('sneekers', {}, true),
    new Item('waffers', {}, false),
    new Item('pepsi', {}, false),
    new Item('fuel', {}, false),
    new Item('car wash', {}, false),
  ];

  onChange(items: Item[]) {
    console.log(items);
  }
}
