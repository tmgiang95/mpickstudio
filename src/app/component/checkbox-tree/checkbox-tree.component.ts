import {Component} from '@angular/core';
import {Tree, TreeNode} from "../../core/models/tree.model";

@Component({
  selector: 'app-checkbox-tree',
  templateUrl: './checkbox-tree.component.html',
  styleUrls: ['./checkbox-tree.component.scss']
})
export class CheckboxTreeComponent {
  public datas: TreeNode[];
  public selectedTreeNode: TreeNode | null;

  constructor() {
    this.selectedTreeNode = null;
    this.datas = [
      {
        label: "HỢP TÁC MEDIA",
        children: []
      }, {
        label: "M PICK ĐÁNH GIÁ",
        children: []
      }, {
        label: "REVIEW",
        children: []
      }, {
        label: "TIN TỨC",
        children: []
      }, {
        label: "TIPS & TRICKS",
        children: [{
          label: "TIPS ANDROID",
          children: []
        },{
          label: "TIPS IOS",
          children: []
        }]
      },
    ]
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
