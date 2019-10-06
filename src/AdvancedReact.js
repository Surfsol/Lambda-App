import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ClassComponents from './ClassComponents'
import ReactLifecycle from './ReactLifecycle'
import ComposeAndShareStateful from './ComposeAndShareStateful'
import Testing from './Testing'
function AdvancedReact(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/AdvancedReact/ClassComponents'>Class Components</NavLink>
            <Route path='/webapp2/AdvancedReact/ClassComponents' component={ClassComponents}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedReact/ReactLifecycle'>React Lifecycle</NavLink>
            <Route path='/webapp2/AdvancedReact/ReactLifecycle' component={ReactLifecycle}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedReact/compose'>Compose Custom hooks</NavLink>
            <Route path='/webapp2/AdvancedReact/compose' component={ComposeAndShareStateful}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedReact/test'>Testing and Sprint</NavLink>
            <Route path='/webapp2/AdvancedReact/test' component={Testing}/>
            </div>
        </div>
       
    )

}

export default AdvancedReact;