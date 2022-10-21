const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`
Number of categories: ${categories.children.length}

Category: ${items[0].firstElementChild.textContent}
Elements: ${items[0].lastElementChild.children.length}

Category: ${items[1].firstElementChild.textContent}
Elements: ${items[1].lastElementChild.children.length}

Category: ${items[2].firstElementChild.textContent}
Elements: ${items[2].lastElementChild.children.length}

`);
