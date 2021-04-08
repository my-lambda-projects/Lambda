# Nested Data Exercises

### 💪 10+ Practice Challenges: Nested `Objects` & `Arrays`

This challenge will test your ability to work with nested Objects and Arrays.

Uses [real-world 'inspired' data.](#data)

> If you are experienced on this topic, expand the ["💡 Challenge Yourself!" section](#stretch) (following the instructions.)

##### Index

* [Instructions](#instructions)
* [Get Started](#get-started)
* Preview Test [Data](#data)
* Stuck? Check [Hints](#hints)

## Instructions

**Task:** Complete the 10+ functions in [`index.js`](./index.js) and pass all tests specified in [`test/index.test.js`](./test/index.test.js) ✅

The difficulty increases as you progress.

> Before you begin coding, review [test data below](#data)

1. `getName(character)` -> `Luke Skywalker`
1. `getFilmCount(character)` -> 5
1. `getFirstStarshipName(character)` -> `X-wing`
1. `getSummary(character)` -> `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
1. `getVehiclesCostInCreditsSumTotal(character)` -> 8000
1. `getStarshipPassengerAndCrewSumTotal(character)` -> 27
1. `getNthFilm(character, filmNumber)` filmNumber=1 -> `A New Hope`
1. `getCargoCapacityTotal(character)` -> 80124
1. `getFastestStarshipName(character)` -> `X-wing`
1. `getLargestCargoStarshipModelName(character)` -> `Lambda-class T-4a shuttle`
1. `getSlowestVehicleOrStarshipName(character)` -> `Imperial Speeder Bike`


### Stretch

<details>
  <summary> 💡 Challenge Yourself! (expand for stretch tips) </summary>

* Research & use different patterns. (Destructuring, move common code into reusable helper methods, functional programming techniques)
* Trade completed code with a peer:
  * Pair program: Take turns (30-60 min.) working through a refactor. Talk through & optimize as needed.
  * Trade code for feedback! (Example format: 3&1, 3 things that you liked and 1 to improve.)
* Time yourself. See if you can beat your own time *starting over.* **Speed run!**
* See how many tests you can pass/complete before Googling or asking for help.
* When you're finished, refactor & improve readability. Write up why it is improved.

</details>


## Get Started

3 options are included below.

The CodeSandbox option is fast & highly recommended.

**1. Fastest Option**

[LAUNCH ON CODESANDBOX 🚀](https://codesandbox.io/s/github/justsml/nested-data-exercises?previewwindow=tests)


<details>
  <summary>2. Local Setup Instructions: From Command Line</summary>

1. Fork & clone to your local computer
1. `cd` into your newly cloned repository
1. Install using `npm`
1. Run test command


```sh
git clone <insert your git clone url here>
cd <repo folder name>
npm install
npm run test:watch
#####
### Or without fs watching:
# npm test
```

**NOTE:** In local development, use the file watcher command: `npm run test:watch`.

</details>

<details>
  <summary>3. Local Setup Instructions: Run Tests in Browser</summary>

1. Fork & clone to your local computer
1. `cd` into your newly cloned repository
1. Install and Start using `npm`

```sh
git clone <insert your git clone url here>
cd <repo folder name>
npm install
npm start
```

</details>



## Data

Example data your code will be tested against.

```js
// Complete Test Data Object (credit: https://SWAPI.co)
// Side note: Yes Star Wars 🤓 purists. It's a bit out of date. Talk to SWAPI about it.
// Focus & follow instructions above. 🤖
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "homeworld": "Tatooine",
  "films": [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "Revenge of the Sith",
    "The Force Awakens"
  ],
  "species": [
    "Human"
  ],
  "vehicles": [
    {
      "name": "Snowspeeder",
      "model": "t-47 airspeeder",
      "manufacturer": "Incom corporation",
      "cost_in_credits": null,
      "length": "4.5",
      "max_atmosphering_speed": "650",
      "crew": 2,
      "passengers": 0,
      "cargo_capacity": "10"
    },
    {
      "name": "Imperial Speeder Bike",
      "model": "74-Z speeder bike",
      "manufacturer": "Aratech Repulsor Company",
      "cost_in_credits": "8000",
      "length": "3",
      "max_atmosphering_speed": "360",
      "crew": 1,
      "passengers": 1,
      "cargo_capacity": "4"
    }
  ],
  "starships": [
    {
      "name": "X-wing",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": 149999,
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter"
    },
    {
      "name": "Imperial shuttle",
      "model": "Lambda-class T-4a shuttle",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": 240000,
      "length": "20",
      "max_atmosphering_speed": "850",
      "crew": 6,
      "passengers": 20,
      "cargo_capacity": "80000",
      "consumables": "2 months",
      "hyperdrive_rating": "1.0",
      "MGLT": "50",
      "starship_class": "Armed government transport"
    }
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
```



## Hints

#### Helpful tips & reminders 🔎

* **Critical:** Don't make assumptions about input data types. (Convert/handle `Numbers` & `null`)
    * Convert **number strings** into **actual numbers** with built-in functions `parseInt`, `parseFloat`, `Number`, etc.
* Ensure your functions **`return somethingUseful`.**
* Make sure you understand the requirements. All the words used? Try list the steps in comments first.
* Don't forget the source data uses `snake_case` naming.
* Pay close attention to array vs. object syntax (`vehicles[0].name` vs. `character.vehicles`.)
* Some of the functions include detailed instructions.
* You might have to infer the desired fields. Carefully read the description and function name (description included above the function.)

