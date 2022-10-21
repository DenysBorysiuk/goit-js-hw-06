const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const makeElements = options =>
  options.map(option => {
    const item = document.createElement('li');
    item.textContent = option;
    item.classList.add('item');
    return item;
  });

const elementsList = makeElements(ingredients);
ingredientsList.append(...elementsList);

console.log(elementsList);
