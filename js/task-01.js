const categoryList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCount}`);
});