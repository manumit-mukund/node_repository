const addItem = (currentList, newItem) => {

    // Spreads existing items and adds the new one at the end
    return [...currentList, newItem];

};

const colors = ['red', 'blue'];
const newColors = addItem(colors, 'green');
// ['red', 'blue', 'green']

console.log('newColors = ', newColors);
