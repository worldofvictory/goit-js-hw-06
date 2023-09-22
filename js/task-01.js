const categoriesList = document.querySelector("#categories");

console.log("Number of categories:", categoriesList.children.length);

const categories = categoriesList.children;

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements);
}