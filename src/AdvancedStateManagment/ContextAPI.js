import React from 'react'
import shopping from '../assets/AdvanceStateManagement/shopping.png'
import step1 from '../assets/AdvanceStateManagement/step1.png'

function ContextAPI(){

    return(
        <div>
        <div><img src={shopping}/></div>
        <p>Eaiser to use than props, but not as scalable</p>
        <p>context</p>
        <div><img src={step1}/>
        <h4>Step 1, create context folder, add files, ProductContext.js</h4>
        <h4>in App.js wrap return in ProductContext.Provider value=..</h4>
        </div>
        </div>
    )
}
export default ContextAPI