import React from 'react';
import ReactDOM from 'react-dom';
import DocTop from './Doc-top';
import './index.css';
//import * as serviceWorker from './serviceWorker';
class Bussiness extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="document">
                <div className="document-top">
                    <DocTop />
                </div>
                <div className="document-body">
                </div>
            </div>
        )
        
        
    }
}

ReactDOM.render( <Bussiness /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();