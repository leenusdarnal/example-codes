type NODE<T> = {
    value: T;
    prev?: NODE<T>;
    next?: NODE<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: NODE<T>;
    private tail?: NODE<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as NODE<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index Greater than length");
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        this.length++;
        // let curr = this.head;
        // for (let i = 0; curr && i < idx; i++) {
        //     curr = curr.next;
        // }
        // curr = curr as NODE<T>;
        const curr = this.getAt(idx) as NODE<T>;
        const node = { value: item } as NODE<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = curr;
        }
    }
    append(item: T): void {
        const node = { value: item } as NODE<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
        // this.length--;
        // if (this.length === 0) {
        //     const out = this.head?.value;
        //     this.head = this.tail;
        //     return out;
        // }
        // if (curr.prev) {
        //     curr.prev = curr.next;
        // }
        // if (curr.next) {
        //     curr.next = curr.prev;
        // }

        // if (curr === this.head) {
        //     this.head = curr.next;
        // }
        // if (curr === this.tail) {
        //     this.tail = curr.prev;
        // }
        // curr.prev = curr.next = undefined;
        // return curr.value;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }
    private removeNode(node: NODE<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail;
            return out;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        node.prev = node.next = undefined;
        return node.value;
    }
    private getAt(idx: number): NODE<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }
}
