import React, {Component} from 'react';
import Header from './Header';
import './AddSubscribers.css'

class AddSubscribers extends Component{
	render(){
		return(<div>
		<Header heading="Add Subscriber" />
		<div className="component-body-container"></div>
		<button className="backButton">Back</button>
		<form className="subscriber-form">
		<label htmlFor="name" className="label-control">Name</label><br />
		<input id="name" type="text" className="input-control" name="name" /><br /> <br />
		<label htmlFor="phone" className="label-control">Phone</label><br />
		<input id="phone" type="text" className="input-control" name="phone" /><br /> <br />
		<div className="subscriber-info-container">
		<span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
		<span className="subscriber-info">Name: </span><br />
		<span className="subscriber-info">Phone: </span><br />
		</div>
		<button type="submit" className="addButton">Add</button>
		</form>
		</div>);
	}
}

export default AddSubscribers;