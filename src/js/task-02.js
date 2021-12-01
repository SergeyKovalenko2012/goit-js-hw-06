const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulList = document.getElementById("ingredients");

const ulItem = ingredients.forEach(ingredient => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  ulList.append(item);
});
