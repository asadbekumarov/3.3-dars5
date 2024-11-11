const eLForm = document.querySelector(".todo__form");
const eLInput = document.querySelector("#todo__form-input");
const eLListItem = document.querySelector(".todo__list");
const eLClear = document.querySelector("#todo__clear-btn");

eLForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = eLInput.value;
  let neWList = document.createElement("li");
  let neWbtn = document.createElement("button");
  let neWedit = document.createElement("button");

  neWList.classList.add("todo__lists-item");
  neWList.textContent = inputValue;

  neWbtn.classList.add("todo__lists-ite");
  neWbtn.textContent = "delete";
  neWList.appendChild(neWbtn);
  neWbtn.style.backgroundColor = "red";
  neWList.style.display = "flex";
  neWList.style.justifyContent = "space-between";
  neWbtn.style.color = "#fff";
  neWbtn.style.border = "none";
  neWbtn.style.padding = "5px";
  neWbtn.style.borderRadius = "5px";
  // ////////////////////////////////////
  neWedit.classList.add("todo__lists-ite");
  neWedit.textContent = "Edit";
  neWList.appendChild(neWedit);
  neWedit.style.backgroundColor = "yellow";
  neWList.style.display = "flex";
  neWList.style.justifyContent = "space-between";
  neWedit.style.color = "#000";
  neWedit.style.border = "none";
  neWedit.style.padding = "5px";
  neWedit.style.borderRadius = "5px";
  //////////////////////////////////////

  neWedit.addEventListener("click", function () {
    let newInputValue = prompt("edit", inputValue);
    if (newInputValue !== null) {
      inputValue = newInputValue;
      neWList.firstChild.textContent = inputValue;
    }
  });

  eLListItem.appendChild(neWList);
  eLInput.value = "";

  neWbtn.addEventListener("click", function () {
    neWList.remove();
  });
});

eLClear.addEventListener("click", function () {
  eLListItem.textContent = "";
});
