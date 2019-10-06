import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import AdvancedReact from './AdvancedReact'
import AdvancedStateManagement from './AdvancedStateManagment/AdvancedStateManagement'
import styled from "styled-components"  


const Background = styled.div`
    background-color: red;
`


function WebApp2(){
    return(
        <div>
            <div>
            <NavLink to='/webapp2/AdvancedReact'>Advanced React</NavLink>
            <Route path='/webapp2/AdvancedReact' component={AdvancedReact}/>
            </div>
            <div>
            <NavLink to='/webapp2/Advancedstate'>Advanced State Management</NavLink>
            <Route path='/webapp2/Advancedstate' component={AdvancedStateManagement}/>
            </div>
        </div>
       
    )

}

export default WebApp2;

