import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ClassComponents from './ClassComponents'
import ReactLifecycle from './ReactLifecycle'
function AdvancedReact(){
    return(
        <div>
            <NavLink to='/webapp2/AdvancedReact/ClassComponents'>Class Components</NavLink>
            <Route path='/webapp2/AdvancedReact/ClassComponents' component={ClassComponents}/>
            <NavLink to='/webapp2/AdvancedReact/ReactLifecycle'>React Lifecycle</NavLink>
            <Route path='/webapp2/AdvancedReact/ReactLifecycle' component={ReactLifecycle}/>
        </div>
       
    )

}

export default AdvancedReact;