import React from 'react' 
import lifecycle from './assets/Lifecycle/lifecycle.png'
import phases from './assets/Lifecycle/phases.png'
import usercards from './assets/Lifecycle/usercards.png'

function ReactLifecycle(){
    return(
        <div>
        <div>
        <img src={usercards}/>
        <li><a target="_blank" href="https://github.com/Surfsol/React-Github-User-Card">React-Github-User-Card</a></li>
            <h1>Component Lifecycle 3 phrases</h1>
            <p>Mounting, Updating/re-render, Unmonunting</p>
            mount - functions while mount effects run
            class - lifecycle component, f() mount - to re-render need component did mount
            <p>The Birth/Mounting Phase</p>

            <img src={lifecycle}/>
            <img src={phases}/>
            
            <li><a target="_blank" href="https://www.youtube.com/watch?v=MSK-XEs8qEU&amp;feature=youtu.be">Class Components</a></li>
        </div>

        <div>
            let react handle all dom updates
            -can use refs to interact with dom, only if needed, such as scroll events
        
            <p>This is the phase when the component is being built out from ground up.
            Whatever initial data you’ll have access to will be defined on the constructor of this phase
            Your render method is invoked.
            componentDidMount gets called as well.</p>
            <p>Growth/Updating Phase
            setState can be used to change the component’s state data, forcing a call to render.
            shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
            </p>
            <p>Death/Un-mounting Phase
            Component is removed from the screen.
            componentWillUnmount is called and can be used for any clean up you may need to do.</p>
        </div>
        </div>
    )
}

export default ReactLifecycle;