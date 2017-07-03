import React from "react";
import Section from './section';

export class PortfolioItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {hasImage:true};
		this.onUpdateImageState = this.onUpdateImageState.bind(this);
	}

	onUpdateImageState(e) {
		this.setState({hasImage:false});
		setTimeout(() => {
			this.setState({hasImage:true});
		},1000)
	}

	render() {
		var path = `img/portfolio/${this.props.img}.png`;
		return 	<div onClick={this.onUpdateImageState} className="col-sm-4 portfolio-item">
			        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
			            <div className="caption">
			                <div className="caption-content">
			                    <i className="fa fa-search-plus fa-3x"></i>
			                </div>
			            </div>
			            {this.state.hasImage ? <img src={path} className="img-responsive" alt=""/> : null}
			        </a>
			    </div>;
	}
}

export default class Portfolio extends React.Component {
	render(){
		return  <Section id="portfolio" title="Portfolio">
		            <div className="row">
		            	{this.props.children}
		            </div>
    			</Section>
	}
}