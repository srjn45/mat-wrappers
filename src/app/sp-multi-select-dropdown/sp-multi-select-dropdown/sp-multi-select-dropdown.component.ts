import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Item } from '../../model/item';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'sp-multi-select-dropdown',
  templateUrl: './sp-multi-select-dropdown.component.html',
  styleUrls: ['./sp-multi-select-dropdown.component.css']
})
export class SpMultiSelectDropdownComponent implements OnInit {

  @ViewChild('chipList')
  public chipList: any;
  private chipsDiv: HTMLDivElement;

  @Input() public items: Item[];
  public selectedItems: Item[] = [];

  @Output() public change: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  visible: boolean = true;
  selectable: boolean = false;
  removable: boolean = true;

  public dropDown: boolean = false;


  constructor() { }

  ngOnInit() {
    this.selectedItems = this.items.filter(x => x.selected == true);
    this.chipsDiv = this.chipList._elementRef.nativeElement.children[0];
  }

  scrollLeft(event: Event) {
    event.stopPropagation();
    this.chipsDiv.scrollLeft -= 50;
  }

  scrollRight(event: Event) {
    event.stopPropagation();
    this.chipsDiv.scrollLeft += 50;
  }

  onSelect(list: MatListOption[]) {
    this.items.forEach((x: Item) => { x.selected = false });
    list.map(x => x.value).forEach(x => x.selected = true);
    this.selectedItems = list.map(x => x.value);
    this.change.emit(this.selectedItems.map(x => x.value));
  }

  remove(item: Item): void {
    this.dropDown = !this.dropDown;
    item.selected = false;
    let index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
      this.change.emit(this.selectedItems.map(x => x.value));
    }
  }

}
