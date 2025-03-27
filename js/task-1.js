const cats = document.querySelectorAll('li.item');

console.log(`Number of categories: ${cats.length}`);

const items = document.querySelectorAll('.item');

items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
