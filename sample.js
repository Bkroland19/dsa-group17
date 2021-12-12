
                    <form>
                   

                    <div class="form-group">
                      <label for="exampleFormControlInput1">Input values to the stack.</label>
                      <input id="puts" type="number" class ="form-control input" placeholder ="Input" required>
                      
                    </div>

                    <button class="btn btn-info btn-sm mr-3" type = "button" onclick = "compute_push()">push</button>
                    <button class="btn btn-success btn-sm mr-3" type = "button" onclick="peek()">peek</button>
                    <button class="btn btn-danger btn-sm mr-3" type = "button" onclick="pop()">pop</button>
                    <!-- <button class="btn btn-primary btn-sm mr-3" type = "button" onclick="">Display</button> -->
                    <button class="btn btn-warning btn-sm mr-3" type = "button" onclick="">Size</button>
                    
                    <div class="form-group">
                      <label for="exampleFormControlSelect2">Output:<span class = "limit"></span> </label>
                      <select multiple class="form-control output_elements" id="myselect">
                    
                      </select>
                    </div>
                    
                  </form>


stack js-----------------------------------------------------------------


let output = document.querySelector(".output_elements");

let stack = {
   integers : [1]
}
let topelement = -1;
const stack_size = 5;

Display();
function compute_push(){

  const tInput = document.querySelector('#puts').value;
  let Input = document.querySelector('input');
  if(topelement === stack_size-1){
       output.innerHTML = `<option> Stack overflow ,can't add to an already full stack. </option>`;
      // alert("stack overflow,can't add to an already full stack.");
      // Input.value = '';
  } 
  else{

      topelement++;
      stack.integers[topelement] = tInput;
      console.log(stack.integers[topelement]);
       Input.value = '';
  
        Display();
     
  }

}


function pop(){
  if(topelement === -1){
      output.innerHTML = `<option> stack  underflow.</option>`;
  }
  else{
      topelement--;
      Display();
  }
}

function peek(){
  if(topelement === -1){
      output.innerHTML = `<option> stack  underflow.</option>`;
  }
  else{
  
      output.innerHTML += `<option> topmost element is ${stack.integers[topelement]}</option>`;
  }

}


function Display(){
  if(topelement === -1){
      output.innerHTML = `<option> stack is empty, nothing to display. </option>`;
  }
  else
  {
     let  myselect = document.getElementById('myselect');
      myselect.options.length = 0;
      for(let i = topelement; i >= 0; i-- ){
          output.innerHTML += `<option> ${stack.integers[i]}</option>`;
      }
  }
}



single linked list 

function Node(data) {
    this.data = data;
    this.next = null;
}
 
function SinglyList() {
    this._length = 0;
    this.head = null;
}
 
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
 
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
 
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
 
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};


double linked list
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
 
function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}
 
DoublyList.prototype.add = function(value) {
    var node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};
 
DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
 
DoublyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
 
        // 2nd use-case: there is a second node
        if (!this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }
 
    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4th use-case: a middle node is removed
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
 
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
 
    this._length--;
 
    return message.success;
};