const inputBox = document.querySelector("#input-box");

const listContainer = document.querySelector("#list-container");

const add = document.querySelector(".Add");

function addTask() {
  if (inputBox.value == "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}

add.addEventListener("click", addTask);

inputBox.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

let savedata=()=>{
    localStorage.setItem('data',listContainer.innerHTML)
};

function showItem(){
  listContainer.innerHTML = localStorage.getItem('data');
}

showItem();