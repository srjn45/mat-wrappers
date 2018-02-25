import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../model/node';
import { Config } from '../model/config';
import { SELECT_CHECKBOX, SELECT_NONE, SELECT_RADIO } from "../model/config";
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'sp-treeview-node',
  templateUrl: './sp-treeview-node.component.html',
  styleUrls: ['./sp-treeview-node.component.css']
})
export class SpTreeviewNodeComponent implements OnInit {

  private SELECT_CHECKBOX = SELECT_CHECKBOX;
  private SELECT_RADIO = SELECT_RADIO;

  @Input() public node: Node;
  @Input() public config: Config = new Config();

  @Output() public checkChange: EventEmitter<Node> = new EventEmitter<Node>();

  constructor() {
  }

  ngOnInit() {
    if (this.config.select == this.SELECT_CHECKBOX) {
      this.checkChildrenRecursive(this.node);
    } else if (this.config.select == this.SELECT_RADIO) {

    }

  }

  checkChildrenRecursive(node: Node) {
    if (node == null || node.children == null) {
      return;
    }

    if (node.checked) {
      this.changeChildren(node);
      return;
    }

    node.children.filter(n => n.children != null).forEach(n => this.checkChildrenRecursive(n));

    let checkedChildren: number = node.children.filter(n => n.checked).length;

    let indeterminateChildren: number = node.children.filter(n => n.indeterminate).length;

    console.log(node.text + " : " + checkedChildren + " : " + indeterminateChildren);

    if (indeterminateChildren > 0) {
      node.indeterminate = true;
    } else {
      node.indeterminate = false;
      if (checkedChildren == node.children.length) {
        node.checked = true;
      } else if (checkedChildren == 0) {
        node.checked = false;
      } else {
        node.indeterminate = true;
      }
    }
  }

  onCollapseExpand = () => {
    this.node.collapsed = !this.node.collapsed;
    console.log("onCollapseExpand");
  }

  onCheckChange = (event: MatCheckboxChange) => {
    console.log(this.node.text);
    // cannot be indeterminate as selection is done
    this.node.indeterminate = false;
    // set new checked value
    this.node.checked = event.checked;
    // set the same checked value for all the children
    this.changeChildren(this.node);
    // notify parent of the change
    this.checkChange.emit(this.node);
  }

  onRadioChange = () => {

  }

  /**
   * recursively set the value of all the children same as the parent
   * @param node 
   */
  changeChildren(node: Node) {
    if (node == null || node.children == null) {
      return;
    }

    node.children.forEach(n => {
      n.checked = node.checked;
      n.indeterminate = false;
      this.changeChildren(n);
    });
  }

  onChildCheckChange(child) {
    let checkedChildren: number = this.node.children.filter(n => n.checked).length;

    let indeterminateChildren: number = this.node.children.filter(n => n.indeterminate).length;

    console.log(this.node.text + " : " + checkedChildren + " : " + indeterminateChildren);

    if (indeterminateChildren > 0) {
      // if indeterminate child the indeterminate
      this.node.indeterminate = true;
    } else {
      // if no indeterminate child
      this.node.indeterminate = false;
      if (checkedChildren == this.node.children.length) {
        // if all checked then checked
        this.node.checked = true;
      } else if (checkedChildren == 0) {
        // if all unchecked then unchecked
        this.node.checked = false;
      } else {
        // if not all checked then indeterminate
        this.node.indeterminate = true;
      }
    }

    // notify parent of the change
    this.checkChange.emit(this.node);
  }
}


