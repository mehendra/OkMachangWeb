import React from 'react';
import '../content/index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Usla2017 from './usla2017'
import RottyParty2017 from './rottyparty2017'

const Gigs = ({ match }) => (
    <div>
        <ul>
            <li>
                <Link to={`${match.url}/usla2017`}>
                    Usla 2017
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/rottyparty2017`}>
                    Rotty Party 2017
        </Link>
            </li>
        </ul>
        <div className="pageContent">
            <Route path={`${match.url}/usla2017`} component={Usla2017} />
            <Route path={`${match.url}/rottyparty2017`} component={RottyParty2017} />
            <Route exact path={match.url} render={() => (
                <h3>What gig would you like to have a look</h3>
            )} />
        </div>
    </div>
)

export default Gigs;