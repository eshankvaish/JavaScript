class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data){ //insert element at the end of linked list
        let node = new Node(data);
        let current;
        if(this.head == null) {
            this.head = node;
        }else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index){
        if (index > 0 && index > this.size)
        {
            return false;
        }else {
            let node = new Node(data);
            let current, prev;
            current = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let i = 0;
                while (i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                //element added at respective position
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index > 0 && index > this.size){
            return -1;
        } else {
            let current, prev, i=0;
            current = this.head;
            prev = current;
            if (index === 0) {
                this.head = current.next;
            } else { 
                while (i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.size--;
            return current.data;
        }
    }

    removeElement(data) {
        let current = this.head, prev = null;
        while (current != null) {
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    printList() {
        let current = this.head;
        var str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        if(this.isEmpty()){
            console.log("The List is Empty");
        } else {
            console.log("The List is ",str);
        }
    }
}

let list = new LinkedList();
console.log("List is Empty:", list.isEmpty());
list.printList();
list.add(10);
list.printList();
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.printList();
list.insertAt(60,2);
list.removeElement(50);
list.removeFrom(3);
list.printList();
console.log("List is Empty:", list.isEmpty());
