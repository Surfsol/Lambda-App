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
        <h4>pass data we want to share, value={{}} </h4>
        <h4>consume data in child component, ex. const product = useContext(ProductContext)</h4>
        <div>
            <li><a target="_blank" href="https://codesandbox.io/s/bold-montalcini-4t9um">Code Sandbox 2</a></li>
        </div>
        <div>
            <li><a target="_blank" href="https://codesandbox.io/s/trinkets-httpajax-ii-solution-3tcoo">Code Sandbox 2</a></li>
        </div>
        
        </div>
        </div>
    )
}
export default ContextAPI