import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Node } from '../model/node';
import { Config, SELECT_CHECKBOX, SELECT_RADIO } from '../model/config';
import { SpTreeviewNodeComponent } from '../sp-treeview-node/sp-treeview-node.component';

@Component({
  selector: 'sp-treeview',
  templateUrl: './sp-treeview.component.html',
  styleUrls: ['./sp-treeview.component.css']
})
export class SpTreeviewComponent implements OnInit {

  @Input() nodes: Node[];
  @Input() config: Config = new Config();

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren('tree') trees: QueryList<SpTreeviewNodeComponent>;

  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    if (this.config.select == SELECT_CHECKBOX) {
      let values = [];
      this.trees.forEach(t => {
        t.getCheckedValues().forEach(v => values.push(v))
      });
      this.change.emit(values);
    } else if (this.config.select == SELECT_RADIO) {
      this.change.emit(event);
    }
  }
}
