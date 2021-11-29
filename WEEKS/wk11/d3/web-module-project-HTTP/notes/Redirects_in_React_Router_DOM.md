## A Quick and Easy Guide for Implementing Redirect in your React App

[![Alex Farmer](https://miro.medium.com/fit/c/56/56/0*bkfIF45OQOy7Q8X2)](https://medium.com/@alexfarmer?source=post_page-----46198938eedc--------------------------------)

![](https://miro.medium.com/max/1280/1*HrNReUbetzdphB-2Ph_ElQ.gif)

When you try to access a restricted path

I just finished up my mod 4 project at Flatiron’s coding bootcamp (almost done!) and I was required to include at least two routes in my single page application. React Router is cool because it allows you to _programmatically navigate_ your single page app. In my case, one of my routes would only be accessible if a user was logged in, so if someone tried to access their `/profile` route without a successful login, they needed to be redirected back to the home page. How can you view your profile if you’re not logged in? That wouldn’t make any sense.

Your situation may be different, but here are the basics.

Turns out, `<Redirect />` is built into React Router DOM, so all you need to do is import it at the top of your file. If you haven’t already, you’ll need to [install react-router-dom using npm](https://www.npmjs.com/package/react-router-dom). Once that’s ready to go, import redirect in the relevant file/component as such:

**import** { Redirect } **from** "react-router-dom";

There are many components you can import from react-router-dom, so make sure you import whatever else you might need in your file as well. For example:

**import** { Redirect, Route, NavLink } **from** "react-router-dom";

There are lots of different cases in which you might want to redirect a user on your page. In my case, I needed to redirect a user back to the home page if they attempted to access the `/profile` route without being logged in.

How would we check that? Well, if using token authorization, we could simply check that there was a token value other than _null._ We could also check that a `currentUser` exists in state, assuming it was stored in state to begin with.

## What other conditions might require us to redirect a user? To name a few…

- A user is attempting to access a page that is restricted
- A user is attempting to access a page that no longer exists
- An incorrect path was typed into the address bar (common typo)
- A successful login has occurred and we need to navigate off of the login screen and onto the home page or dashboard

## When do we use redirects?

In general, if we need to change our URL path without the user intentionally clicking on a link to that path, we may need to use a redirect. In many cases, we will want to do this without the page reloading. Redirects are complimentary to our Router setup, but cannot stand on their own (the program needs to know what it’s rendering when it redirects!).

For this, you can use ternary operators or switch cases. To refresh on ternaries:

thingThatReturnsTrueOrFalse ? thingThatHappensIfTrue : thingIfFalse

You will need this ternary to sit somewhere in the _rendered_ part of the component. I beat my head against a brick wall getting redirects to work before I realized this. It’s not enough to simply return a redirect somewhere in your code, it needs to actually _render_.

First, let’s address how a redirect component looks.

<**Redirect** **to**\="/path-you-want-to-redirect-to" />

Pretty simple.

Here’s an example of how a component with a conditional redirect might look:

const **profilePage** = (props) => {  
 return(<div>  
 _{\*/ bits of JSX \*/}  
 {\*/ some React component \*/}  
 {\*/ more bits of JSX \*/}  
 {\*/ maybe like a form or something idk \*/}_ { **props**.**loggedIn** ? **null** : <**Redirect** **to**\="/login" /> }

 </div>)  
}

In the above example, `props.loggedIn` would be a **boolean value** handed down as props to the component from the parent’s state. To translate that ternary into English: “If we are logged in, give us null (or nothing), but if we are not logged in then return a redirect component that takes us to the login page’s path.”

Redirects allow you to redirect _from_ a certain that may no longer exist. Consider the possibility of a site changing its structure such that anyone who has the old path saved to their favorites will suddenly run into an error. Now, we could just let these people figure it out and navigate to the home page, but that’s not the best UX in the world. Here’s how we might catch those scenarios:

<Switch>  
  <Redirect **from**\='/users/:id' **to**\='/users/profile/:id'/>  
  <Route **path**\='/users/profile/:id'>  
    <Profile />  
  </Route>  
</Switch>

Redirect allows you to define where to redirect _from_ as well as where to redirect _to_. This feature may come in handy in your projects.

- Redirects are a part of react-router-dom and must be imported into the file you plan on using a redirect in
- Redirects are react components which must be rendered in order to work
- The basic syntax of a redirect is: `<Redirect to="/path" />`
- To redirect in certain conditions, use a ternary operator or switch case.

![](https://miro.medium.com/max/2560/1*GHb1kk0dPjm64v-A1buVjA.jpeg)
