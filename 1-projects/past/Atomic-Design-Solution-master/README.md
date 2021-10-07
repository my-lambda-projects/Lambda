# Client Side Routing - HTTP - Atomic Design

## Topics

- Routing with React Router
- Axios for making HTTP requests
- JavaScript Promises
- Atomic Design

## Description

In this `create-react-app` initialized app, you will be working with the provided UI library, which has been developed based on `Atomic Design` principles. This is not the only way to design and organize your components, but it will serve as an example of a very strong option.

The app you will be finishing is an app that lists a few dog breeds, shows an image, and provides links to view their sub-breeds.

## Instructions

You are given the `atoms`, `molecules`, `organisms`, and `templates` needed to build out this app. You will just need to consume them in your pages `Breeds.js` and `SubBreeds.js`. All of your HTTP requests should be made from inside of the page files.

- Requirements for `Breeds.js`

  - Title should be "Breeds"
  - Show a list of dog breeds
  - Each list item should be a link to a `SubBreed` page that shows the sub-breed details
  - Show an image of the first dog breed in the list, with that breed as a title for the image
  - use the provided method `filterBreeds` or any modification of it to limit the list (This is to make sure that the breeds we show actually have sub-breeds. Make sure you still make the initial get requests for the list of dogs first though as part of the assignment exercise)

- Requirements for `SubBreeds.js`
  - Title should be "Sub-breeds"
  - Subtitle should be the given breed
  - Show a list of sub-breeds for the given breed
  - Show an image of the first sub-breed in the list, with that sub-breed as a title for the image

## Resources

- Dog Breed API: https://dog.ceo/dog-api/
- Atomic Design: http://bradfrost.com/blog/post/atomic-web-design/

## Post-assignment Resouces:

- Component Folder Pattern: https://medium.com/styled-components/component-folder-pattern-ee42df37ec68
- Modified Atomic Design: https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f
