// Selectors
var todoInput = document.querySelector(".fname");
var lname=document.querySelector(".lname");
var country=document.querySelector(".country");
var score=document.querySelector(".score");
var btn = document.querySelector(".submit");
var todolist = document.querySelector(".todo-list");

//Event Handlers
btn.onclick = create;
todolist.onclick = deletecheck;
var co;
//Functions
function create(e) {
  if (todoInput.value != "" && lname.value!="" &&country.value!=""&&score.value!="") {
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item1");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);
    
    
    var newLi1 = document.createElement("li");
    newLi1.classList.add("todo-item2");
    newLi1.innerHTML = lname.value;
    newDiv.appendChild(newLi1);

    var newLi2 = document.createElement("li");
    newLi2.classList.add("todo-item3");
    newLi2.innerHTML = country.value;
    newDiv.appendChild(newLi2);
    
    var newLi3 = document.createElement("li");
    newLi3.classList.add("todo-item4");
    co=score.value;
    newLi3.innerHTML = score.value;
    newDiv.appendChild(newLi3);

    var plusbtn = document.createElement("button");
    plusbtn.classList.add("plus-btn");
    plusbtn.innerHTML = '+5';
    newDiv.appendChild(plusbtn);

    var minusbtn = document.createElement("button");
    minusbtn.classList.add("minus-btn");
    minusbtn.innerHTML = '-5';
    newDiv.appendChild(minusbtn);
    
    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);

    todolist.appendChild(newDiv);
    todoInput.value = "";
    lname.value="";
    country.value="";
    score.value="";

  } else {
    alert("Input Field Can't Be Blank");
  }
}

function deletecheck(e) {
  var item = e.target;

  if (item.classList[0] === "delete-btn") {
    var parent = item.parentElement;
    parent.remove();
  }

  if (item.classList[0] === "plus-btn") {
    const val=item.parentElement.querySelector(".todo .todo-item4");
    co=parseInt(co)+5;
     val.innerHTML=co;
     
  }

  if (item.classList[0] === "minus-btn") {
    const val=item.parentElement.querySelector(".todo .todo-item4");
    co=parseInt(co)-5;
    if(parseInt(co)>0){
     val.innerHTML=co;
    }
    else{
      val.innerHTML=0;
    }
  }
}

