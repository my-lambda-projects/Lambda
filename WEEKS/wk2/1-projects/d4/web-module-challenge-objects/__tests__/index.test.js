import functions from '../index';
import { burger } from '../index'

const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: "this place is chill with really cool people, great for getting work done on weekdays"},
]

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('createMenuItem', ()=>{
    it('createMenuItem returns object', ()=>{
        expect(functions.createMenuItem('taco', 8, 'lunch')).toEqual({name: 'taco', price: 8, category:'lunch'});
    })
});

// test burger method discount here 
describe('burger.discount', ()=>{
    it('burger.discount returns a number', ()=>{
        expect(burger.discount('teacher')).toBe(13.5);
    })
    it('burger.discount returns a number', ()=>{
        expect(burger.discount('public')).toBe(16.2);
    })
});


describe('getReviewByIndex', ()=>{
    it('getReviewByIndex returns a string', ()=>{
        expect(functions.getReviewByIndex(reviews, 0)).toBe("Daniela gave the restaurant a 5 star review, and their feedback was: Beautiful atmosphere and wonderful vegan options!");
    })
    it('getReviewByIndex returns a string', ()=>{
        expect(functions.getReviewByIndex(reviews, 2)).toBe("Miranda gave the restaurant a 4 star review, and their feedback was: fun trivia and cool vibes");
    })
});

describe('getLastReview', ()=>{
    it('getLastReview returns a string', ()=>{
        expect(functions.getLastReview(reviews)).toBe(`Reyna gave the restaurant a 3.5 star review, and their feedback was: this place is chill with really cool people, great for getting work done on weekdays`);
    })
});
