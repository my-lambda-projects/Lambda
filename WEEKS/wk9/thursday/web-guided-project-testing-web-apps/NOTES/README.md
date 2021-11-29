**Module Materials:**\
Module Project: <https://github.com/LambdaSchool/web-module-project-custom-hook> GP Slides : <https://docs.google.com/presentation/d/1Pd0GyIx-DMmtruuAz3ZWuXkV3N5K_Z6SNZftcN3T8Z8/edit?usp=sharing>\
Yesterday's Module Project Review: <https://www.loom.com/share/a9c6c6230a33452ea67e3e484671b25f> PW: klt31T4\
Alternative Lecture Video: [Dustin Myers](https://youtu.be/KcpbY22WqP8) | [Josh Jacobson](https://youtu.be/_FoezSN1YRE) | [Warren C. Longmire](https://youtu.be/UrCq44RxhrE) | [Brian Kirkby](https://youtu.be/p5O4XD-5hes)**Key Terminology:**

-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *localStorage* - [a javascript module for saving persistant data within your application](https://blog.logrocket.com/localstorage-javascript-complete-guide/#whereislocalstoragestored)
-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *the JSON library* - [Used for working with JSON objects. Used in this lesson specifically to convert between objects and strings using JSON.parse and JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *custom hook* - [a function used in functional React components for seperating business logic](https://reactjs.org/docs/hooks-custom.html)
-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *composing hooks* - [the process of wrapping and modifying the functionality of one hook with another](https://medium.com/better-programming/compose-react-hooks-like-composing-react-components-892c23530432)

**Key Concepts:**

-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *Stateful Logic* - [Application logic related to the manipulation of data](https://www.cronj.com/blog/learn-stateful-and-stateless-components-in-reactjs/)
-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *Seperation of Concerns* - [The programming principle related to developing small, focused, modular and interconnected code.](https://www.springboottutorial.com/software-design-seperation-of-concerns-with-examples)
-   ![:memo:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f4dd%402x.png) *object bracket notation* - [Also called "Computed properties." A piece of javascript syntax that allows for the key of an object to be passed dynamicly](https://ui.dev/computed-property-names/)

**Stretch Tutorials:**

-   Model Custom Hook - <https://upmostly.com/tutorials/modal-components-react-custom-hooks>


---

[wed lecture](https://www.youtube.com/watch?v=b--jKWmIA8A)

---

Here are your setup instructions for module 4:

1.  Clone without forking the following repo: <https://github.com/LambdaSchool/web-guided-project-testing-web-apps>
2.  Navigate into the root folder and run npm i to load dependences.

![:point_right:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f449%402x.png) Technical issues spinning up the project? Please head over to the help channel!\
![:point_right:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f449%402x.png) If you fall behind during lecture and wish to catch up:\
`git fetch && git reset --hard origin/lecture`\
![:point_right:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-medium%2F1f449%402x.png) Slido event: <https://app.sli.do/event/msea4w8q>

LambdaSchool/web-guided-project-testing-web-apps

Language

JavaScript




Advanced React
Unit 3: Advanced Web Apps

Advanced React
- Class Components
- The React Lifecycle
- Composing Non-Visual Behaviors
- Testing Web Applications
Advanced React
Composing Non-Visual Behaviors
- Understanding Separation of Concerns
- Understanding Stateful Logic
- Use custom hooks to add behaviors
New focus...
Component Architecture
What is Stateful Logic?
What is Stateful Logic?
Any code that is used to manipulate data.
Why is Stateful Logic?
Why is Stateful Logic?
Because Separation of Concerns
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Keeps your code DRY and reusable.
Separation of Concerns
Each component/module/function should be as small as possible and do ONE thing.
Keeps your code DRY and reusable.
Make each piece easy to test.
How can we break down our
components into smaller,
focused, reusable parts?
How can we break down our components
into smaller, focused, reusable parts?
● Identify the code that can be modularized.
● Move that code into its own file.
● Identify the dependances and connect them to module.
● Replace hard code with module.
● Test that app works the same as before.
Modularizing our components:
- Subcomponents (Presentation Logic )
- Services (Data Logic)
- Custom Hooks (Stateful Logic)
Stateful logic just means code
that manipulates state...
Stateful logic just means code
that manipulates state...
...but not the state itself!
Takeaways:
- Separation of Concerns is good!
- Component Code can be separated into
- Presentation Logic
- Data Logic
- Stateful Logic
- Break them up to help keep things dry, reusable, efficient and
testable.
Break


![](testing1.png)


![](integration-tests.png)


![](whatwetest.png)

> i.e. pushing a button... or sliding a slider...

