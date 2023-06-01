function ListNode(val) {

      this.val = val;
    
      this.next = null;
    
    }
    
    
    
    
    let head = new ListNode(4);
    
    head.next = new ListNode(5);
    
    head.next.next = new ListNode(1);
    
    head.next.next.next = new ListNode(9);

    
    console.log(listNodeToString(head));
    console.log(listNodeToString(head.next));



// write a function that represents a linked list as an array

function listNodeToString(node) {
    // input: linked list 
    // output : array
// loop through
//  push to array
    
let current = node;
let arr = [];
while (current) {
    arr.push(current.val);
    current = current.next;
}
return arr;
}