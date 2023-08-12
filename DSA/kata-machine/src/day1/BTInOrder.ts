function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    // recurse
    walk(curr.left, path);
    // pre
    path.push(curr.value);
    // recurse
    walk(curr.right, path);
    // Post
    return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
