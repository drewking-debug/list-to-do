// Add a close button to each existing list item
var myNodelist = document.querySelectorAll("#my-items-list li");
for (let i = 0; i < myNodelist.length; i++) {
  addCloseButton(myNodelist[i]);
}

// Function to add a "close" button to a list item
function addCloseButton(item) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); // Unicode for the "×" symbol
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);

  // Close button click event
  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none"; // Hides the item
  };
}

// Click on a list item to toggle the "checked" state
var list = document.querySelector("#my-items-list");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Function to create a new list item
function newElement() {
  let inputValue = document.getElementById("items").value;
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  let li = document.createElement("li");
  let textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  document.getElementById("my-items-list").appendChild(li);

  // Add a close button to the new item
  addCloseButton(li);

  // Clear the input field
  document.getElementById("items").value = "";
}
