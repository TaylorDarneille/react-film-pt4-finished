import React, { Component } from 'react';

class Fave extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 	}
	// }

	handleClick = (e) => {
		e.stopPropagation();
		console.log("handling fave click!");

		this.props.onFaveToggle();
		// this.setState({
		// 	isFave: this.state.isFave ? false : true
		// })
	}

	render() {
		const queueClass = this.props.isFave ? "remove_from_queue" : "add_to_queue"
		return(
		<div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
			<p className="material-icons">{queueClass}</p>
		</div>
		)

	}
}

export default Fave;