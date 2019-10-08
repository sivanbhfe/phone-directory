import React, {Component} from 'react';
import Header from './Header';

class AddSubscribers extends Component{
	render(){
		return(<div>
		<Header heading="Add Subscriber" />
		<div className="component-body-container"></div>
		<button className="backButton">Back</button>
		</div>);
	}
}

export default AddSubscribers;