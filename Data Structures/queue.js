class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(data) {
        this.items.push(data);
    }
    dequeue() {
        if(this.isEmpty()) {
            console.log("Empty Queue");
        } else {
            return this.items.shift();
        }
    }
    front() {
        return isEmpty()?"Empty Queue":this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        let str = "";
        this.items.forEach((value) => {
            str += value + " ";
        });
        console.log("The queue is:"+str);
    }
}
let queue = new Queue();
console.log("The Queue is:", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.printQueue();
queue.dequeue();

