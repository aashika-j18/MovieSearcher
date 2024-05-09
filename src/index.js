import React from "react";
import ReactDOM from 'react-dom';

import App from './App';

            //1st arg: pass the component that we want to render
                        //2nd arg: all created components are injected into div with id='root'
ReactDOM.render(<App />,document.getElementById('root'));