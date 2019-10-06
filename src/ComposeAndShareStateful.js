import React from 'react' 
import crypto from './assets/Compose/crypto.png'
import hooks from './assets/Compose/hooks.png'


function ComposeAndShareStateful(){
    return(
        <div>
        <div>
        <img src={crypto}/>
        <li><a target="_blank" href="https://github.com/Surfsol/dark-mode">Github darkmode</a></li>
        <h2>Local Storage - is  database inside BhxBrowser</h2>
        <h4>Learnt: destructure array in []  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);</h4>
        <p>if object or array would neeed to stringify to put in,
 -and parse to Json to get out. return JSON.parse(window.localStorage.getItem(key));</p>
        </div>
        <div>
        <img src={hooks}/>
        <li><a target="_blank" href="https://codesandbox.io/s/custom-hooks-starter-i5fdp">Code Sandbox custom hooks</a></li>

        <li><a target="_blank" href="https://www.youtube.com/watch?v=vGms2PKqWks&amp;feature=youtu.be">youtube lecture</a></li>
        <li><a target="_blank" href="https://material-ui.com/customization/theming/ ">MaterialUI</a></li>
        </div>
        </div>
        )
    }

export default ComposeAndShareStateful;