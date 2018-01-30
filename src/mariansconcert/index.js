import React from 'react';
import ReactDOM from 'react-dom';
import '../content/index.css';
const MariansImage = require('../content/img/marians.jpg')
const Relish = require('../content/img/relish.png')
const KiwiAuto = require('../content/img/kiwiautotrader.png')
const Usla = require('../content/img/uslalogo.png')

const Marians = () => {
    document.title = 'Marians Live In Concert - Wellington -2018';
    return (
        <div className="pageContent">
            <div className="mariansPosterContent">
                <center>
                    <img src={MariansImage} rounded alt="Marian Poster" />
                </center>
            </div>
            <div className="sponsors">
                <div className="sponsorHeader">Proudly Supported By</div>
                <div className="gold">GOLD</div>
                <img src={Usla} rounded alt="Usla Logo" />
                <img src={KiwiAuto} rounded alt="Kiwiauto Traders Logo" />
                <img src={Relish} rounded alt="Rek=lish Logo" />
            </div>
        </div>
    );
}

export default Marians
