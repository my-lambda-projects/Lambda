# Objective 2 - implement protected routes using an authentication token and Redirect: WEB43 - 3.3

> As we build our web apps, we will most likely have some "protected" routes - routes that should only render with authentication. Normally, the client will make a login request, sending the server the user's username and password. Then, the server will check those credentials against the database, and if it can authenticate the user, it will return a token. Once we have this token, we can add two layers of protection to our app. One uses protected routes, and the other sends an authentication header with our API calls (as we learned in the above objective).

Overview
--------

As we build our web apps, we will most likely have some "protected" routes - routes that should only render with authentication. Normally, the client will make a login request, sending the server the user's username and password. Then, the server will check those credentials against the database, and if it can authenticate the user, it will return a token. Once we have this token, we can add two layers of protection to our app. One uses protected routes, and the other sends an authentication header with our API calls (as we learned in the above objective).

Follow Along
------------

Let's see what this looks like in code. We will use some React Router components, and build a custom `<PrivateRoute />` component to protect the route.

In our `App` component, let's add a couple of public routes and a couple of links:

    function App() {
      return (
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
        </div>
      );
    }

Notice the links? Anyone can click on the "Public Page" link, but if they click on the "Protected Page" link without authorization, they will be routed to the login page instead.

Next step will be to add a `<PrivateRoute />` route:

    <Route path="/public" component={Public}/>
    <Route path="/login" component={Login}/>
    <PrivateRoute path='/protected' component={Protected} />

Here are the requirements for our PrivateRoute component.

*   It has the same API as `<Route />`.
*   It renders a `<Route />` and passes all the props through to it.
*   It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login.

With those requirements in mind, let's build it out.

    
    
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
    
    )

This code means that the component can accept a component Prop, just like `<Route />` does, and take any other prop that gets passed into it by spreading in `...rest`.

    
    
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={} />
    )

We are passing in all of the props passed to `<PrivateRoute />` in the App component.

    
    
    
    
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

This is using the render props pattern. We won't go too much into how this works here, but it would be a great weekend learning objective for you to look into if you so desire.

Also, notice the `<Redirect />` component? That is from React Router. It does exactly what you think - redirects the app to the supplied route.

At this point, you can see the PrivateRoute component in action if you try to click on the Protected Page link. You should be redirected to "/login" instead of being taken to the "/protected" page.

Let's think about the login page now. Our login page is going to be a form that takes in a user's credentials, calls the login endpoint with a `POST` request, and then redirects the user to the protected route when the login API call returns. Let's set it up and practice our authentication skills!

    import React, { useState } from 'react';
    import { axiosWithAuth } from '../path/to/module';
    
    const Login = (props) => {
     const [credentials, setCredentials] = useState({});
    
      const login = e => {
        e.preventDefault();
        axiosWithAuth().post('login/endpoint', credentials)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/');
          })
      }
    
      const handleChange = e => {
          setCredentials: {
            ...credentials,
            [e.target.name]: e.target.value,
          }
      }
    
        return (
          <div>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        )
    }
    
    export default Login;

Great work providing a good experience for your amazing users!

Challenge
---------

Add some `loggingIn` state, and `error` state. Solve for both potential states in your login form. For example, if `loggingIn` is true, show a spinner in the button. If there is an error, display an error message.


[Source](https://lambdaschool.instructure.com/courses/1239/pages/objective-2-implement-protected-routes-using-an-authentication-token-and-redirect?module_item_id=597624)