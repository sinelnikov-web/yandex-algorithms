// Обход дерева в ширину

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

function bfs(tree) {
    let queue = [tree];
    while (queue.length) {
        const node = queue.shift();
        console.log(node.value)
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
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

bfs(tree);
