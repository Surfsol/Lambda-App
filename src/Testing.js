import React from 'react'
import ar1 from './assets/ClassComponents/advancedreact1.webm'
import ar2 from './assets/ClassComponents/Advancedreact2.webm'
import sprint from './assets/ClassComponents/sprint.png'
import baseball from './assets/ClassComponents/baseball.png'
import hooks from './assets/Compose/hooks.png'
import ReactPlayer from 'react-player'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

function Testing(){
    return(
        <div>
        
        <div>Sprint Challange

        
        <img src={sprint}/>
        </div>
        <div>
        <Video>
        <source src={ar1}  type="video/webm" />
        </Video>
        <Video>
        <source src={ar2}  type="video/webm" />
        </Video>
        </div>

        <div>
        <img src={baseball}/>
        <li><a target="_blank" href="https://github.com/Surfsol/Web-Application-Testing">Testing</a></li>
        <h4>Learnt: destructure array in []  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);</h4>
        <h2>Testing: save time for debugging, provides documentation for what should happen</h2>
        <p>if update and things go wrong, test may begin to fail</p>
        <p>gives us confidence in code</p>
        <p>The more your tests resemble the way your software is used, the more confidence they can give you.</p>
        <p>yarn add -D @testing-library/react
        npm install -D @testing-library/react</p>
        <p>make a test file, and put tests.js files inside</p>
        <p>yarn test</p>
        <h2>To test handle function, they must be seperated. and outside of function</h2>
        <h3>Example: export const addTouchdown = currentScore => return currentScore + 7;</h3>
        <li><a target="_blank" href="https://jestjs.io/docs/en/expect"></a>Assertions for testing</li>       
        </div>

        <div>
        <img src={hooks}/>
        <li><a target="_blank" href="https://codesandbox.io/s/testing-i-starter-z3z2g">Code Sandbox </a></li>

        <li><a target="_blank" href="https://www.youtube.com/watch?v=BLyglWbOTSw&amp=&feature=youtu.be">youtube lecture</a></li>
        <h4>Resources for Testing</h4>
        <li><a target="_blank" href="https://testing-library.com/docs/dom-testing-library/cheatsheet">React Assertions for testing</a></li>
        <li><a target="_blank" href="https://jestjs.io/docs/en/cli">Jest</a></li>
        </div>
        </div>
        )
    }

export default Testing;