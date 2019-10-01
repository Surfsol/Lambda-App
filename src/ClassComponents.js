import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import csb3 from './assets/ClassComponents/csb3.png'
import csb1 from './assets/ClassComponents/csb1.png'
import ccr from './assets/ClassComponents/ccr.png'
import todo from './assets/ClassComponents/todo.png'
import shoplist from './assets/ClassComponents/shoppinglist.png'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import styled from "styled-components"


const SboxPic = styled.div`
    height: 100px;
    width: 100px;
    margin: 2px;
    position: center;
`
const Container = styled.div`
    position: right
`

function ClassComponents(){
    return(
        <div>
            <li><img src={todo}/></li>
            <ul>
                <li>1. create class and extend from React.Component</li>
                <li>2. Add constructor and state</li>
                <li>3. Render, return</li>
                <li>Return: send props to TodoForm and TodoList</li>
                <li>Todo.js is child of TodoList</li>
                <li>TodoList.js extends props to Todo.  Also, contains function and button completedTask </li>
                <li>Todo.js create div for each item and display task, while linking id to toggleItem, so .completed can be toggled true or fales </li>
                <li>TodoForm.js form to add a new item, then will setState and re-render</li>
            </ul>

            <h1>Class Components</h1>
            <p>function components now same functionality as class components, but there are a lot of companies still using class components</p>
            <h2>Code Sandbox</h2>
            <ul>
                
            <li><a target="_blank" href="https://codesandbox.io/s/class-components-ii-start-zrwli">Guided Project</a></li>
            <li><img src={shoplist}/></li>
            <li><a target="_blank" href="https://codesandbox.io/s/compassionate-shadow-kej41">Completed guided project</a></li>
            <li><a target="_blank" href="https://codesandbox.io/s/3xwzql38nm">Code Sandbox 1</a></li>
                <a target="_blank" href="https://codesandbox.io/s/flamboyant-yalow-qkll3">Code Sandbox 1 complete</a>
                <a target="_blank" href="https://codesandbox.io/s/upbeat-lalande-92vhy">Code Sandbox 1 complete</a>
                <li><img src={csb1}/></li>
                <li><a target="_blank" href="https://codesandbox.io/s/103jkor46q">Code Sandbox 2</a></li>
                <li><a target="_blank" href="https://codesandbox.io/s/yk37ykmyrz">Code Sandbox 3</a></li>
                <li><a target="_blank" href="https://codesandbox.io/s/clever-field-6x6p9">Code Sandbox 2 complete</a></li>
                <img src={csb3}/>

            </ul>
            <ul><h2>youtube videos</h2>
                <li><a target="_blank" href="https://www.youtube.com/watch?v=Y9J3IuFEJJc&feature=youtu.be">Class Components</a></li>
                <li><a target="_blank" href="https://youtu.be/lksl2l5sVek">Class Components</a></li>
                <li><a target="_blank" href="https://youtu.be/qRPM_CWPRfM">State props</a></li>
                <li><a target="_blank" href="https://youtu.be/8SELYmSaRvA">Event handlers</a></li>
                <li><a target="_blank" href="https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420">Super() Article</a></li>
                <li><a target="_blank" href="https://love2dev.com/blog/javascript-remove-from-array/">Remove item from array</a></li>
            </ul>
            
            <Container>
            <p>React.Component </p>
            <p>Extends a base class, Lifecycle Methods, such as constructor(), render(), setState()</p>
            <p>Render function - react takes code, pipes through dom, and uses code to create dom elements</p>
            <p>Class components can hold state (data)</p>

            
            <ol>
                <li>1 declare class component -React.Component- parent class: class FooComponent extends React.Component {}.</li>
                <li>2 Use the constructor function to set up some state. because we’re calling extends, we also 
                    need to call super(); otherwise we wont have access the this</li>
                <li>3 Render some sort of UI to the DOM. We do this by calling the life-cycle method called render.</li>
                <li><img src={ccr}/></li>
            </ol>

            <p>constructor() initializes state</p>
             <p>use super()</p>


            <ul><h3>Using State</h3>
                <li>State is like heart and props is like blood</li>
                <li>State is component level Storage Object</li>
                <li>Used to hold onto data</li>
                <li>Should be set up in constructor function</li>
                <li>Can create, read, delet and update state</li>
                <li>when state updates render gets called again</li>
                <li>If component is mounted you will have access to state data</li>
                <li>state can be changed through set state method</li>
                <li>Can pass state around as props throughout multiple levels of components</li>
                <li>When state is passed around props change too</li>
                <li><a target="_blank" href="https://www.robinwieruch.de/react-state-array-add-update-remove">Manage arrays in react state</a></li>
            </ul>

            <p>interpolation in order to present it to the DOM within some Text</p>

        <CardTitle>state to props. </CardTitle>
          <CardSubtitle>React if we can’t pass state around from one component to another</CardSubtitle>
          <CardText>Whatever is set on the state of our Components can be shared between components by passing it down as props</CardText>
          <CardText>Whatever is set on the state of our Components can be shared between components by passing it down as props</CardText>

          <CardText>Because state is as persistent as long as the component is on the screen, we can use it to hold on to memory 
                for our application. That memory could be any data that we pull in from a server elsewhere, some edits from
                 a submission form or simply just based on Users interacting with your web page.</CardText>

            
            
            <h2>setState</h2>
            <p>Only way to change state</p>

            <h2>User Event</h2>
            <li>Anytime user interacts with a dom element: click, mouse enter or leave, scroll</li>
            
            </Container>
        </div>
       
    )

}

export default ClassComponents;