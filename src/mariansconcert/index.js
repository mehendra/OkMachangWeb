import React from 'react';
import ReactDOM from 'react-dom';
import '../content/index.css';
const image = require('../content/img/mariansposter.jpg')

const Marians = () => {
    document.title = 'Marians Live In Concert - Wellington -2018';
    return (
        <div className="mainwindow">
            <div>
                <center>xcxcxcxcxcxc
                    <img src={image} rounded alt="Marian Poster" />
                </center>
            </div>
        </div>
    );
}

export default Marians
