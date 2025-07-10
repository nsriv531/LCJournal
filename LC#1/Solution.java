
// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) {
        this.val = val;
    }
}

// Example usage: build a binary tree and traverse it (inorder)
public class Solution {
    // Insert a value into the binary tree (BST style for demo)
    public TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else root.right = insert(root.right, val);
        return root;
    }

    // Inorder traversal
    public void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    // Example main method
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] values = {5, 3, 7, 2, 4, 6, 8};
        TreeNode root = null;
        for (int val : values) {
            root = sol.insert(root, val);
        }
        System.out.print("Inorder traversal: ");
        sol.inorder(root);
        System.out.println();
    }
}
