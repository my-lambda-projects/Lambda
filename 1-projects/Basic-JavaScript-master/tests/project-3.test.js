/* eslint-disable no-undef */
const {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
} = require('../src/project-3');

describe('Project 3', () => {
  describe('makeCat(name, age)', () => {
    it('should create a new cat with the name and age properties set', () => {
      expect(makeCat('Snowball', 1).name).toBe('Snowball');
      expect(makeCat('Snowball', 1).age).toBe(1);
      expect(makeCat('Snowball II', 5).name).toBe('Snowball II');
      expect(makeCat('Snowball II', 5).age).toBe(5);
    });
    it('should add a method called meow to the new cat object', () => {
      expect(makeCat('Snowball III', 2).meow()).toBe('Meow!');
    });
  });

  describe('addProperty(object, property)', () => {
    it('should add the property to the object with a value of null', () => {
      const object = {
        x: 1,
        y: 2
      };
      const updatedObject = {
        x: 1,
        y: 2,
        z: null
      };
      expect(addProperty(object, 'z')).toEqual(updatedObject);
    });
  });

  describe('invokeMethod(object, method)', () => {
    it('should invoke the method on the object', () => {
      const object = {
        x: 0,
        incrementX() {
          this.x++;
        }
      };
      invokeMethod(object, 'incrementX');
      expect(object.x).toBe(1);
    });
  });

  describe('multiplyMysteryNumberByFive(mysteryNumberObject)', () => {
    it('should return the mysteryNumber property multiplied by five', () => {
      const mysteryBox = {
        mysteryNumber: 999
      };
      expect(multiplyMysteryNumberByFive(mysteryBox)).toBe(4995);
      mysteryBox.mysteryNumber = -5;
      expect(multiplyMysteryNumberByFive(mysteryBox)).toBe(-25);
    });
  });

  describe('deleteProperty(object, property)', () => {
    it('should delete the property from the object', () => {
      const updatedObject = {
        x: 1,
        y: 2
      };
      const object = {
        x: 1,
        y: 2,
        z: null
      };
      expect(deleteProperty(object, 'z')).toEqual(updatedObject);
    });
  });

  describe('newUser(name, email, password)', () => {
    it('should return a new user object with a name, email, and password property that match the arguments', () => {
      const user1 = {
        name: 'Ben',
        email: 'ben@lambdaschool.com',
        password: 'correcthorsebatterystaple'
      };
      expect(newUser(user1.name, user1.email, user1.password)).toEqual(user1);
      const user2 = {
        name: 'Austen',
        email: 'austen@lambdaschool.com',
        password: 'password'
      };
      expect(newUser(user2.name, user2.email, user2.password)).toEqual(user2);
    });
  });

  describe('hasEmail(user)', () => {
    it('should return true if the user object has a value for its email property', () => {
      expect(hasEmail({ username: 'SunJieMing', email: 'ben@lambdaschool.com' })).toEqual(true);
      expect(hasEmail({ username: 'Austen', email: '' })).toEqual(false);
      expect(hasEmail({ username: 'Ryan' })).toEqual(false);
    });
  });

  describe('hasProperty(object, property)', () => {
    it('should return true if the object has the property that is passed in', () => {
      const obj = {
        x: true
      };
      expect(hasProperty(obj, 'x')).toEqual(true);
      expect(hasProperty(obj, 'y')).toEqual(false);
    });
  });

  describe('verifyPassword(user, password)', () => {
    it('should return true if passwords match', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'I love js!';
      expect(verifyPassword(user, password)).toBe(true);
    });
    it('should return false if passwords do not match', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'Hack this guy!';
      expect(verifyPassword(user, password)).toBe(false);
    });
  });

  describe('updatePassword(user, password)', () => {
    it('should return the user object with the updated password', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'I love js even more!';
      expect(updatePassword(user, password).password).toBe(password);
    });
  });

  describe('addFriend(user, newFriend)', () => {
    it('should add a new friend to the end of the friends array property', () => {
      const user = {
        friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young']
      };
      const newFriend = 'Shay';
      expect(addFriend(user, 'Shay').friends.pop()).toBe('Shay');
    });
  });

  describe('setUsersToPremium(users)', () => {
    it('should return the users array with each user\'s isPremium property set to true', () => {
      const users = [
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
      ];
      const updatedUsers = [
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
      ];
      expect(setUsersToPremium(users)).toEqual(updatedUsers);
    });
  });

  describe('sumUserPostLikes(user)', () => {
    it('should return the sum of likes for all user posts', () => {
      const user = {
        username: 'SunJieMing',
        password: 'JavaScript is awesome!',
        posts: [
          {
            id: '1',
            title: 'JS adventures!',
            likes: 10
          },
          {
            id: '2',
            title: 'LambdaSchool forever!',
            likes: 100
          },
          {
            id: '3',
            title: 'What is a JavaScript?',
            likes: 35
          },
          {
            id: '4',
            title: 'JS Objects for dummies',
            likes: 42
          },
          {
            id: '5',
            title: 'Online Education',
            likes: 99
          }
        ]
      };
      expect(sumUserPostLikes(user)).toBe(286);
    });
  });

  describe('addCalculateDiscountPriceMethod(storeItem)', () => {
    const storeItem = {
      price: 80,
      discountPercentage: 0.1
    };
    const storeItem2 = {
      price: 5,
      discountPercentage: 0.5
    };

    it('should add the method \'calculateDiscountPrice\' to the store item object', () => {
      expect(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice).toBeDefined();
      expect(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice).toBeDefined();
    });
    it('should return the discount price from the new \'calculateDiscountPrice\' method', () => {
      expect(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice()).toBe(72);
      expect(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice()).toBe(2.5);
    });
  });
});
