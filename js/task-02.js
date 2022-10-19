const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const makeListItems = items => {
  return items.map(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = item;

    return listItem;
  });
};

const elements = makeListItems(ingredients);
ingredientsList.append(...elements);

// console.log(elements);
