import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import About from './about/index'
import Marians from './mariansconcert/index'
import Gigs from './gigs/index'

const logo_small = require('./content/img/logo_small.png')

const OkMachangWebFrame = () => (
    <Router>
        <div className="header">
            <div>
                <img src={logo_small} alt="logo" />
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gigs">Gigs</Link></li>
                    <li><Link to="/mariansconcert">Marians 2018</Link></li>
                </ul>
                <div className="headingDescription">
                    OK Machang Events :. Wellington's own Sri Lankan entertainment group.
                </div>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/gigs" component={Gigs} />
                <Route path="/mariansconcert" component={Marians} />
            </div>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);



export default OkMachangWebFrame;


ReactDOM.render((
    <OkMachangWebFrame />
), document.getElementById('root'))

