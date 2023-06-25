export interface Tree {
  root: TreeNode;
}

export interface TreeNode {
  label: string;
  check?:boolean;
  children: TreeNode[];
}
