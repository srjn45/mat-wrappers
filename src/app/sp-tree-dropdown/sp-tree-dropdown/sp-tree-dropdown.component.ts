import { Component, OnInit } from '@angular/core';
import { TreeviewItem, DownlineTreeviewItem } from 'ngx-treeview';
import { Node } from '../node';

@Component({
  selector: 'sp-tree-dropdown',
  templateUrl: './sp-tree-dropdown.component.html',
  styleUrls: ['./sp-tree-dropdown.component.css']
})
export class SpTreeDropdownComponent implements OnInit {

  public config = {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  }

  items = [itCategory];

  nodes: Node[] = [
    new Node("Electronics", 1, [
      new Node("Mobile Phones", 11, [
        new Node("Pixel 2 XL", 111),
        new Node("OnePlus 5T", 112)
      ]),
      new Node("Computer", 12, [
        new Node("Alienware", 121, [
          new Node("Alienware 17", 1211),
          new Node("Alienware 14", 1212)
        ]),
        new Node("HP", 122, [
          new Node("HP Omen", 1221),
          new Node("HP Pavelion", 1222)
        ])
      ])
    ]),
  ]

  constructor() { }

  ngOnInit() {
  }

  onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
    console.log(downlineItems);
    // console.log(downlineItems.map(x => x.item.value));
  }
}
const itCategory = new TreeviewItem({
  text: 'IT', value: 9, children: [
    {
      text: 'Programming', value: 91, children: [{
        text: 'Frontend', value: 911, children: [
          { text: 'Angular 1', value: 9111 },
          { text: 'Angular 2', value: 9112 },
          { text: 'ReactJS', value: 9113 }
        ]
      }, {
        text: 'Backend', value: 912, children: [
          { text: 'C#', value: 9121 },
          { text: 'Java', value: 9122 },
          { text: 'Python', value: 9123, checked: false }
        ]
      }]
    },
    {
      text: 'Networking', value: 92, children: [
        { text: 'Internet', value: 921 },
        { text: 'Security', value: 922 }
      ]
    }
  ]
});