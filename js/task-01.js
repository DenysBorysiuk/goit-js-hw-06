const categories = document.querySelector('#categories');
const itemsList = document.querySelectorAll('.item');

console.log(`
Number of categories: ${categories.children.length}

Category: ${itemsList[0].firstElementChild.textContent}
Elements: ${itemsList[0].lastElementChild.children.length}

Category: ${itemsList[1].firstElementChild.textContent}
Elements: ${itemsList[1].lastElementChild.children.length}

Category: ${itemsList[2].firstElementChild.textContent}
Elements: ${itemsList[2].lastElementChild.children.length}

`);
