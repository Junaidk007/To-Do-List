let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function (){
    let item = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "X";
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(delbtn);
    inp.value = "";
});

let del = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove(); // Remove the corresponding <li> element
    }
});