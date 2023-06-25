import {Component, Input} from '@angular/core';
import {TreeNode} from "../../core/models/tree.model";

@Component({
  selector: 'app-checkbox-tree',
  templateUrl: './checkbox-tree.component.html',
  styleUrls: ['./checkbox-tree.component.scss']
})
export class CheckboxTreeComponent {
  @Input() datas: TreeNode[];
  public selectedTreeNode: TreeNode | null;

  constructor() {
    this.selectedTreeNode = null;
  }

  public selectNode(node: TreeNode, value: boolean): void {
    this.check(node, value)
  }

  check(node: any, value: boolean) {
    node.check = value;
    node.children.forEach((x: any) => {
      this.check(x, value)
    })
  }
}
