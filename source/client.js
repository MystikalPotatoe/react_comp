import React from 'react';
import ReactDOM from 'react-dom';
import {default as Portfolio,PortfolioItem} from './components/portfolio.js';

function hey(from='alex',to='mark') {
    return from + "to" + to
    }

hey();

ReactDOM.render(<Portfolio>
					<PortfolioItem img="cake"/>
					<PortfolioItem img="cabin"/>
				</Portfolio>
	,document.getElementById('react-app'));