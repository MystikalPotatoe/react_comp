import React from 'react';
import ReactDOM from 'react-dom';
import {default as Portfolio} from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

function hey(from='alex',to='mark') {
    return from + "to" + to
    }

hey();

var portfoliodata = [{img:'cake', link:'http://02geek.com'},
   {img:'circus', link:'http://02skills.com'},
   {img:'game', link:'http://packtpub.com'},
   {img:'safe', link:'http://02geek.com'},
   {img:'submarine', link:'http://02geek.com'},
   {img:"cabin", link:'http://anxpl.com'}
  ];

ReactDOM.render(<div>
					<Portfolio data={portfoliodata} />
					<About/>
					<Contact/>
				</div>
	,document.getElementById('react-app'));