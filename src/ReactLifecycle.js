import React from 'react' 
import lifecycle from './assets/Lifecycle/lifecycle.png'
import phases from './assets/Lifecycle/phases.png'


function ReactLifecycle(){
    return(
        <div>
        <div>
            <h1>Component Lifecycle 3 phrases</h1>
            <p>Mounting, Updating, Unmonunting</p>
            <p>The Birth/Mounting Phase</p>

            <img src={lifecycle}/>
            <img src={phases}/>
        </div>

        <div>
        
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