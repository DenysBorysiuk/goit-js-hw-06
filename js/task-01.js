const categories = document.querySelector('#categories');

const animalsListTitle = categories.firstElementChild;
const animalsList = animalsListTitle.lastElementChild;

const roductsListTitle = animalsListTitle.nextElementSibling;
const productsList = roductsListTitle.lastElementChild;

const techListTitle = categories.lastElementChild;
const techList = techListTitle.lastElementChild;

console.log(`
Number of categories: ${categories.children.length}

Category: ${animalsListTitle.childNodes[1].textContent}
Elements: ${animalsList.children.length}

Category: ${roductsListTitle.childNodes[1].textContent}
Elements: ${productsList.children.length}

Category: ${techListTitle.childNodes[1].textContent}
Elements: ${techList.children.length}`);
