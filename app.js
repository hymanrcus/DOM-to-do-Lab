// cached element references
const input = document.getElementById("input")
const button = document.querySelector("#submit-button")
const uList = document.querySelector("#todo-list")
////document.querySelector("li").addEventListener("click", doClick)

function doClick(event){
  console.log(event.target)
}

button.addEventListener("click",function(event){
  const li = document.createElement("li")
  li.textContent = input.value
  console.log(li)
  document.querySelector("ul").appendChild(li)
  input.value = " "
})