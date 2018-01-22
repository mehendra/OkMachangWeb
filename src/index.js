import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import About from './about/index'
import Marians from './mariansconcert/index'

const logo_small = require('./content/img/logo_small.png')

const BasicExample = () => (
    <Router>
        <div className="header">
            <div>
                <img src={logo_small} alt="logo" />
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/mariansconcert">Marians 2018</Link></li>
                </ul>
                <div className="headingDescription">
                    OK Machang Events :. Wellington's own Sri Lankan entertainment group.
                </div>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
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

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample;

ReactDOM.render((
    <BasicExample />
), document.getElementById('root'))

