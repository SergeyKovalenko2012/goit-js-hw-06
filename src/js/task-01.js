const numberCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategory.length}`);

const categoryArr = [...numberCategory]
  .map(
    category => `Category:${category.children[0].textContent}
Elements: ${category.children[1].children.length}`
  )
  .join("\n");

console.log(categoryArr);
