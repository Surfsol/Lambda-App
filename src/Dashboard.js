import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import WebApp2 from './WebApp2'


function Dashboard(){

    return(
       <div>
        <NavLink to='/webapp2'>Web Applications II</NavLink>
        <Route path='/webapp2' component={WebApp2}/>
        </div> 
    )
}

export default Dashboard;