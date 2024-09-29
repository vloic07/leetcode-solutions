class AllOne {
    private tail;
    private dummyNode;
    private store;
    constructor() {
        this.dummyNode = { keys: new Set([null]), freq: null, prev: null, next: null};
        this.tail = { keys: new Set([null]), freq: null, prev: this.dummyNode, next: null};

        this.dummyNode.next = this.tail;
        this.print();

        this.store = {};
    }

    print() {
        // comment return to print nodes
        return;
        let cursor = this.dummyNode;

        while (cursor !== null) {
            console.log(JSON.stringify({ keys: [...cursor.keys.values()], freq: cursor.freq}));
            cursor = cursor.next;
        }
        console.log('----------------')
    }

    inc(key: string): void {
        const node = this.store[key];
        if (node === undefined) {
            if (this.dummyNode.next.freq === 1) {
                this.dummyNode.next.keys.add(key);
                this.store[key] = this.dummyNode.next;
            } else {
                const newNode = { keys: new Set([key]), freq: 1, prev: this.dummyNode, next: this.dummyNode.next};
                this.dummyNode.next.prev = newNode;
                this.dummyNode.next = newNode;
                this.store[key] = newNode;
            }
            
        } else {
            if (node.keys.size === 1) {
                if (node.next.freq === node.freq+1) {
                    node.next.keys.add(key);

                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                    this.store[key] = node.next;
                } else {
                    node.freq+=1;
                }
            } else {
                if (node.next.freq === node.freq+1) {
                    node.next.keys.add(key);

                    node.keys.delete(key);
                    this.store[key] = node.next;
                } else {
                    const newNode = { keys: new Set([key]), freq: node.freq + 1, prev: node, next: node.next}
                    node.next.prev = newNode;
                    node.next = newNode;
                    node.keys.delete(key);
                    this.store[key] = newNode;
                }
            }
        }
        this.print();

    }

    dec(key: string): void {
        const node = this.store[key];

        if (node.keys.size === 1) {
            if (node.freq === 1) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.store[key] = undefined;
            }
            else if (node.prev.freq !== node.freq - 1) {
                node.freq-=1;
            } else {
                node.prev.keys.add(key);
                this.store[key] = node.prev;

                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
        } else {
            if (node.freq === 1) {
                node.keys.delete(key);
            }
            else if (node.prev.freq !== node.freq - 1) {
                node.keys.delete(key);
                const newNode = { keys: new Set([key]), freq: node.freq-1, prev: node.prev , next: node};
                node.prev = newNode;
            } else {
                node.prev.keys.add(key);
                node.keys.delete(key);
                this.store[key] = node.prev;
            }
        }
        this.print();    
    }

    getMaxKey(): string {
        const iter = this.tail.prev.keys.values();
        return iter.next().value ?? "";
    }

    getMinKey(): string {
        const iter =  this.dummyNode.next.keys.values();
        return iter.next().value ?? "";
    }
}
