import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent, MatListOption } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'sp-select',
  templateUrl: './sp-select.component.html',
  styleUrls: ['./sp-select.component.css']
})
export class SpSelectComponent implements OnInit {

  public dropDown: boolean = false;

  constructor() { }

  ngOnInit() {
    this.selectedItems = this.items.filter(x => x.selected == true);
  }
  visible: boolean = true;
  selectable: boolean = false;
  removable: boolean = true;

  items = [
    { id: 2, name: 'Lime', selected: false },
    { id: 1, name: 'Lemon', selected: true },
    { id: 3, name: 'Apple', selected: false },
    { id: 2, name: 'Lime', selected: false },
    { id: 1, name: 'Lemon', selected: true },
    { id: 3, name: 'Apple', selected: true },
    { id: 2, name: 'Lime', selected: true },
    { id: 1, name: 'Lemon', selected: true },
    { id: 3, name: 'Apple', selected: true },
  ];

  selectedItems = [];

  onSelect(list: MatListOption[]) {
    this.items.forEach(x => x.selected = false);
    list.map(x => x.value).forEach(x => x.selected = true);
    // this.selectedItems = this.items.filter(x => x.selected == true);
    this.selectedItems = list.map(x => x.value);
  }

  remove(item: { id: number, name: string, selected: boolean }): void {
    this.dropDown = !this.dropDown;
    item.selected = false;
    let index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }
}
