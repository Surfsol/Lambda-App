import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ContextAPI from './ContextAPI'
import Redux from './Redux'
import AsyncRedux from './AsyncRedux'
import ReducerPattern from './ReducerPattern'

function AdvancedState(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/AdvancedState/ContextAPI'>Context API</NavLink>
            <Route path='/webapp2/AdvancedState/ContextAPI' component={ContextAPI}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedState/ReducerPattern'>Reducer Pattern</NavLink>
            <Route path='/webapp2/AdvancedState/ReducerPattern' component={ReducerPattern}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedState/Redux'>Redux</NavLink>
            <Route path='/webapp2/AdvancedState/Redux' component={Redux}/>
            </div>
            <div>
            <NavLink to='/webapp2/AdvancedState/AsyncRedux'>Async Redux</NavLink>
            <Route path='/webapp2/AdvancedState/AsyncRedux' component={AsyncRedux}/>
            </div>
        </div>
       
    )

}

export default AdvancedState;