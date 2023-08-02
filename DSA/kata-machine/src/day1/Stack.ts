type NODE<T> = {
    value: T;
    prev?: NODE<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: NODE<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as NODE<T>;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as NODE<T>;
        this.head = head.prev;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
