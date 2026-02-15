class MinStack {

    // The stack
    stack;

    // The amount of entries in the stack
    size;

    constructor() {
        this.stack = [];
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.size] = val;
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack[this.size-1] = null;
        this.size--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.size-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.stack.filter((v) => v !== null));
    }
}
