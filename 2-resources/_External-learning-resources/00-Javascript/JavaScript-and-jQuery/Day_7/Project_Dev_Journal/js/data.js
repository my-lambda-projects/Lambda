/**
 * Get Posts from localStorage,
 *   returns an array even if not found or corrupt
 */
function getPosts() {
  try {
    const data = JSON.parse(localStorage.getItem("posts"));

    if (Array.isArray(data)) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

/**
 * Save posts to local storage,
 *   only saves if called with argument 1 as an array
 */
function savePosts(posts) {
  if (Array.isArray(posts)) {
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  return true;
}

function resetPosts() {
  const entries = [
    {
      id: 2,
      title: "Fundamentals of a JavaScript Program",
      date: "2018-04-15 08:00",
      post: [
        `In this first sections, students will begin learning the fundamentals of JavaScript. They will learn what an expression is, how to evaluate an expression, and how to build these up into units of JavaScript code (their first program!).`,
        `
      By the end of the first section, students will have a clear understanding of JavaScript functions and use what they’ve learned to write a small program on their own that takes types of words (verbs, nouns, adjectives,...) and creates funny stories as output.`,
      ],
      codeSrc: 'https://repl.it/@mrosata/Day-2-Switch-Statements?lite=false"',
    },
    {
      id: 3,
      title: "Building Arrays and Repeating Work with Loops",
      date: "2018-04-17 08:00",
      post: [
        `This section will introduce one of the most important types in JavaScript as well as computer science in general, the Array. Students will learn how to create arrays and what types of problems can be solved using them.`,
        `By the end of this section students will be able to create, iterate through and sort arrays of values. They’ll learn how to use “for” and “while” loops to control `,
      ],
    },
    {
      id: 4,
      title: "Level-Up! A World of Objects",
      date: "2018-04-18",
      type: "code",
      post: [
        `This section will introduce students to objects in JavaScript. Objects are probably the most important cornerstone of JavaScript since almost everything in JavaScript is an object. Students will learn about object literals, namespace objects, using objects as classes, and what it means when someone says, “everything is an object”.`,
        `By the end of this section the students will be able to begin modeling ideas and solutions by using JavaScript objects and the material learned in the first two sections.`,
      ],
      codeSrc: "https://repl.it/@mrosata/Day-3-Object-Factories-1?lite=false",
    },
    {
      id: 5,
      title: "HTML, the DOM, and a Library Named jQuery",
      date: "2018-04-19",
      type: "basic",
      post: [
        `In the fourth section, students will be introduced to HTML and the DOM. We’ll also look at the jQuery library to more easily work with and control the DOM. We’ll learn about HTML attributes and how to completely manage them using JavaScript.`,
        `By the end of this section students will be able to lookup, change or remove HTML elements, their attributes and their styles using just JavaScript`,
      ],
    },
    {
      id: 6,
      title: "Creating customized HTML forms",
      date: "2018-04-20",
      type: "basic",
      post: [
        `The students will learn how to create HTML forms. More importantly they will understand how browser events are handled using JavaScript. After seeing how events work, they’ll learn how to actually intercept form events that typically cause the browser to reload, and then handle that information like single page JavaScript applications do.`,
        `By the end of this section, students should be comfortable enough with JavaScript and jQuery to take the “battleship” game we created in section three and give it a visual interface using HTML and JavaScript event listeners.`,
      ],
    },
    {
      id: 7,
      title: "Learning to Work with the Browser APIs",
      date: "2018-04-21",
      type: "basic",
      post: [
        `In this section, students will learn to create a slideshow with Bootstrap and load remote images using the “fetch” api. They’ll also see how they can persist information between sessions easily with the browser storage api. They’ll also learn how to embed external content in iframes.`,
        `By the end of this section, students will be able to perform many of the most critical tasks required by webapps, namely handling user interaction. They should be able to start identifying how the webapps they use on a daily basis may be performing many of its tasks.`,
      ],
    },
  ];

  // OVERWRITE STORED POSTS
  localStorage.setItem("posts", JSON.stringify(entries));

  renderPosts(entries);
}
