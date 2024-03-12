const wrapper = document.querySelector(".wrapper"),
  inputField = wrapper.querySelector("header input"),
  listeItem = wrapper.querySelector(".liste");

// console.log(suggestionArray);
inputField.addEventListener("keyup", () => {
  let userValue = inputField.value;
  if (userValue) {
    let searchItem = suggestionArray
      .filter((data) => {
        return data.toLowerCase().startsWith(userValue.toLowerCase());
      })
      .map((data) => {
        return `<li>${data}</li>`;
      })
      .join("");

    wrapper.classList.add("active");

    if (!searchItem.length) {
      listeItem.innerHTML = `<li>${userValue.toLowerCase()}</li>`;
    } else {
      listeItem.innerHTML = searchItem;
      let allItems = document.querySelectorAll("li");
      allItems.forEach((item) => item.setAttribute("onclick", "select(this)"));
    }
  } else {
    listeItem.innerHTML = "";
  }
});

function select(el) {
  inputField.value = el.textContent.toLowerCase();
}
