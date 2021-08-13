# Algorithms Circle the Wagons

# Terms

- Computability

[Computability](https://en.wikipedia.org/wiki/Computability)

- Tractability

Tractability refers to the question as to whether a problem is easily solved in practice. Algorithms that find optimal solutions become intractable quickly on large datasets. In order to find optimal solutions tractably, complicated and unintuitive algorithms have been developed. In order to find near-optimal solutions quickly, random or partial algorithms have been created.

# P = NP?

This is the ultimate question throughout Computer Science research.

# Assignment - Publication

Writing a solution to the Travelling Salesman Problem is a feat worthy of commendation! However, code that only runs on your own computer is smoke and mirrors. Lets make sure that your future employers know about your mix of CS and Web technologies by getting your TSP solution deployed and interactive!

## Deployment

Remember how hard we worked on deploying a Github repository to GCP? This is the one!!!

## A React Component

You are going to begin integrating all of your skills into a complete Computer Scientist Whole. You are going to do this by creating a React component, `TSPSolverDemo`. This component will be insertable into any React website with a single JSX element! You can then deploy it as a standalone React website, or easily insert it into your personal portfolio site as a stand-alone page or an inline demo within some other component.

### HTML Canvas in React

    import React from 'react';

    let canvasContainerStyle = {
      margin: "10 auto"
    }
    let canvasStyle = {
      width: "500px",
      height: "500px"
    }
    class TSPCanvas extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
      updateTSPVertices() {
        // when the TSP has a set of vertices (cities), draw them as small
        // circles here.
      }
      updateTSPPath() {
        // when the TSP has computed the "best" path, draw it here along the circles
      }
      drawCircle() {
        this.context.beginPath();
        this.context.arc(50.5,50.5,20,0,2*Math.PI,false);
        this.context.stroke();
      }
      click() {
        drawCircle();
      }
      render() {
        return (<div style={canvasContainerStyle}>
                 <canvas id="TSP" ref={(c) => this.context = c.getContext('2d')} height={canvasStyle.height} width={canvasStyle.width} style={canvasStyle} onClick={() => this.click()} />
               </div>
        );
      }
    }
    export default TSPCanvas;

### Component process

First, think about what your component should be able to do:

- Heading - Realtime Travelling Salesman Problem (TSP)
- Text - Describe the Travelling Salesman Problem in your own words. Be sure to remind the reader that this is a fundamental problem in the area of Computer Science. It is NP-Complete, O(n!), and not tractable. Explain anything you think is interesting about the problem and this assignment containing it.
- Inner React component - TSPRunner
  - TSPRunner Title
  - TSPRunner configuration buttons
    - Number of cities
    - Algorithm: Heap's Algorithm (O(n!) !) or k-NN
      - Number of k if k-NN
      - Number of city starts if k-NN
    - Maximum run time (for either algorithm).
  - RUN button
  - Component to display results - a realtime report of the current best path and its length.
  - Final report: How long, how many results, analysis of results

## Next:

Another react component: Draw it!
