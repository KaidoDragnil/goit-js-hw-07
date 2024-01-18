const categories = document.querySelectorAll('.item');
console.log(`number of categories: ${categories.length}`);
// const category = document.querySelectorAll('.item > h2');
// category.forEach(a => {
//   console.log(`category: ${a.textContent}`);
//   console.log(`elements: ${a.nextElementSibling.children.length}`);
// });
categories.forEach(a => {
  const category = a.querySelector('h2');
  console.log(`category: ${category.textContent}`);
  const elements = a.querySelectorAll('ul > li');
  console.log(`elements: ${elements.length}`);
});
