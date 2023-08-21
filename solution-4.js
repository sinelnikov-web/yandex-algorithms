// Обход дерева в глубину

class TreeNode {
    value = null;
    left = null;
    right = null;

    constructor(value, opts = {left: null, right: null}) {
        this.value = value;
        this.left = opts.left;
        this.right = opts.right;
    }
}

function dfs(tree) {
    let stack = [tree];
    while (stack.length) {
        const node = stack.pop();
        console.log(node.value)
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}

const tree = new TreeNode(0, {
    left: new TreeNode(1, {
        left: new TreeNode(2, {
            left: new TreeNode(3)
        })
    }),
    right: new TreeNode(4),
})

dfs(tree);

