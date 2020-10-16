class Stack {
    constructor () {
        this.items = [];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    push(data) {
        this.items.push(data);
    }
    pop() {
        if(this.isEmpty()){
            return "UnderFlow"
        }
        return this.items.pop();
    }
    printStack() {
        if(this.isEmpty()){
            console.log("Empty Stack");
        } else {
            console.log("The stack is: ")
            this.items.forEach(function(value){
                console.log(value + " ");
            });
        }
    }
}

let stack = new Stack();
console.log("Stack is Empty:", stack.isEmpty());
stack.printStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
stack.pop();
console.log("Stack is Empty:", stack.isEmpty());
stack.printStack();


