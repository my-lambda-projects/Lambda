import functions from '../index';
// import{originalFlavors}from '../index';
let originalFlavors;
beforeEach(()=>{
    originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"];
})

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});
describe('copy', ()=>{
    it('copy returns array', ()=>{
        expect(functions.copy(originalFlavors)).toEqual(originalFlavors);
    })
});
describe('is31Flavors', ()=>{
    it('is31Flavours returns true', ()=>{
        expect(functions.is31Flavors(originalFlavors)).toBe(true);
    })
});
describe('addFlavor', ()=>{
    it('addFlavor returns array with new flavor at beginning', ()=>{
        expect(functions.addFlavor(originalFlavors, 'Rainbow Sherbert')).toEqual([
            'Rainbow Sherbert',
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
            'Vanilla Burnt Almond'
          ]);
    })
});
describe('removeLastFlavor', ()=>{
    it('removeLastFlavor returns array with last flavor removed', ()=>{
        expect(functions.removeLastFlavor(originalFlavors)).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            'Vanilla',
          ]);
    })
});
describe('getFlavorByIndex', ()=>{
    it('getFlavorByIndex returns string at index', ()=>{
        expect(functions.getFlavorByIndex(originalFlavors, 2)).toBe("Burgundy Cherry");
    })
});

describe('removeFlavorByName', ()=>{
    it('removeFlavorByName returns array with specified removed', ()=>{
        expect(functions.removeFlavorByName(originalFlavors, 'Vanilla')).toEqual([
            'Banana Nut Fudge',
            'Black Walnut',
            'Burgundy Cherry',
            'Butterscotch Ribbon',
            'Cherry Macaron',
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon',
            'Coffee',
            'Coffee Candy',
            'Date Nut',
            'Eggnog',
            'French Vanilla',
            'Green Mint Stick',
            'Lemon Crisp',
            'Lemon Custard',
            'Lemon Sherbet',
            'Maple Nut',
            'Orange Sherbet',
            'Peach',
            'Peppermint Fudge Ribbon',
            'Peppermint Stick',
            'Pineapple Sherbet',
            'Raspberry Sherbet',
            'Rocky Road',
            'Strawberry',
            "Vanilla Burnt Almond"
          ]);
    })
});

describe('filterByWord', ()=>{
    it('filterByWord returns a new array items containing word', ()=>{
        expect(functions.filterByWord(originalFlavors, 'Chocolate')).toEqual([
            'Chocolate',
            'Chocolate Almond',
            'Chocolate Chip',
            'Chocolate Fudge',
            'Chocolate Mint',
            'Chocolate Ribbon'
          ]);
    })
});