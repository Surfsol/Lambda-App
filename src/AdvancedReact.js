import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ClassComponents from './ClassComponents'

function AdvancedReact(){
    return(
        <div>
            <NavLink to='/webapp2/AdvancedReact/ClassComponents'>Class Components</NavLink>
            <Route path='/webapp2/AdvancedReact/ClassComponents' component={ClassComponents}/>
        </div>
       
    )

}

export default AdvancedReact;