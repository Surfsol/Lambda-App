import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ContextAPI from './ContextAPI'
import Redux from './Redux'
import AsyncRedux from './AsyncRedux'
import ReducerPattern from './ReducerPattern'

function AdvancedStateManagement(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/AdvancedStateManagement/ContextAPI'>Context API</NavLink>
            <Route path='/webapp2/AdvancedStateManagement/ContextAPI' component={ContextAPI}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedStateManagement/ReducerPattern'>Reducer Pattern</NavLink>
            <Route path='/webapp2/AdvancedStateManagement/ReducerPattern' component={ReducerPattern}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedStateManagement/Redux'>Redux</NavLink>
            <Route path='/webapp2/AdvancedStateManagement/Redux' component={Redux}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedStateManagement/AsyncRedux'>Async Redux</NavLink>
            <Route path='/webapp2/AdvancedStateManagement/AsyncRedux' component={AsyncRedux}/>
            </div>
        </div>
       
    )

}

export default AdvancedStateManagement;