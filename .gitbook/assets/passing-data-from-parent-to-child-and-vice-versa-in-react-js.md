![](https://miro.medium.com/max/7000/0*-_XXEf-fntzJ4xBf)

Photo by [Tanaphong Toochinda](https://unsplash.com/@daen_2chinda?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

[![Thomas Garza](https://miro.medium.com/fit/c/56/56/2*lTkWNKvsPSgA3AxKyyV5EA.png)](https://medium.com/@tbgarza2?source=post_page-----a93119370b4a--------------------------------)

One of the best ways for me to understand complex topics is to see if I can relate the topic to something else in my life. When I first tried to understand parent and child components in React JS, I was lost. Then I tried to understand this concept from the perspective of human parents and children (particularly my own interactions with my parents and my own children/grandchildren).

Parent components can pass data to child components with the props object. The way I think of this concept is giving my grandchild access to food or toys at Pawpaw’s house (my house). In code, this can be passing of specific properties, such as states or variables from parent component to child components.

Parents also govern how the children relay data back to themselves. I see this as giving my grandchild choices of either playing outside or watching Mickey’s Playhouse inside. This can be done in the form of event handlers, such as functions to change states or perform other tasks.

Child components can relay data back to parents either as events or input data. I see this similar to my grandchild telling me she wants to play out side or watch her show.

**Parent Component**

I created a parent component that contains a title and count state.

class Parent extends React.Component {  
  constructor() {  
    super()  
    this.state = {  
      title: ‘Button’,  
      count: 0,  
    }  
  }

**Event Handler**

This function changes the title state to a new given title and increments the count.

changeStates(newTitle) {  
  this.setState({  
    title: newTitle,  
    count: this.state.count + 1,  
  })  
}

**Parent renders to the page**

The parent then will post this div to the DOM. This is where the title, count and changeStates function are given to the Child. For the changeStates function, the newTitle of ‘What?’ and ‘This!’ were hard coded to one of the Child components below (top button has ‘What?’, bottom button has ‘This!’).

render() {  
  return (  
    <div>  
      <h1>{this.state.title}</h1>  
      <h2>{this.state.count}</h2>  
      <Child doWhat={this.changeStates.bind(this, ‘What?’)}  
      title={this.state.title}  
      count={this.state.count}/>  
      <Child doWhat={this.changeStates.bind(this, ‘This!’)}  
      title={this.state.title}  
      count={this.state.count}/>  
    </div>  
  )  
  }  
}

**Child Component**

This child component takes in the title, count and event handler (passed to the child as doWhat instead of changeStates). Here the child component determines what to do with the prop given by the parent component.

const Child = ({ title, count, doWhat }) => (  
  <div>  
    <span>{count}</span>  
    <button onClick={doWhat}>{title}</button>  
  </div>  
)

Below are screenshots of the results of the above code displayed on the DOM at the initial loading of the page.

![](https://miro.medium.com/max/60/0*6zWUbRce5BVHGFPS?q=20)

![](https://miro.medium.com/max/2732/0*6zWUbRce5BVHGFPS)

Initial Startup of Page

Below shows the value of the title is changed to the hard coded ‘What?’ and the count is increased after pressing the top button.

![](https://miro.medium.com/max/60/0*peRxLXzWieSuYcl-?q=20)

![](https://miro.medium.com/max/2732/0*peRxLXzWieSuYcl-)

After Pressing Top Button

Now after pressing the bottom button, the title is changed to ‘This!’ and the count is increased to 2.

![](https://miro.medium.com/max/60/0*MgE_A-7MUnZnf20z?q=20)

![](https://miro.medium.com/max/2732/0*MgE_A-7MUnZnf20z)

After Pressing Bottom Button

The above example helps to demonstrate how data can be passed down from parent to children (title and count) and the children can pass data back to parents (onClick event). Try out this example for yourself to help solidify your own understanding of parent-child component data transfer.