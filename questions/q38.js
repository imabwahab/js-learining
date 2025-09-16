// Implement a simple stack using an array.

class Stack {
  constructor() {
    this.items = [];
  }
  // Add item to the top of the stack
  push(element) {
    this.items.push(element);
  }
  // Remove and return the top item
  pop() {
    if (this.isEmpty) {
      return 'Stack is empty';
    }
    return this.items.pop();
  }
  // View the top item without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join('<-'));
  }
};

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
