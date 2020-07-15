let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
	e.preventDefault();
	var todo = document.getElementById("todoText").value;
	var list = document.getElementById("todoList");

	list.innerHTML += "<input type='checkbox' name='todo' />" + todo + "<br>";
}

function TodoClear(e) {
	e.preventDefault();
	var array = document.getElementsByName("todo")
	array.forEach(elm => elm.checked = false);

}

function TodoMark(e) {
	e.preventDefault();
	var array = document.getElementsByName("todo")
	array.forEach(elm => elm.checked = true);
}

function TodoDel(e) {
	e.preventDefault();
	var dv = document.getElementById("todoList")
	dv.innerHTML = "";
}

