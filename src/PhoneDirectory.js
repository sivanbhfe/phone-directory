import React, {Component} from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {
	
	constructor(){
		super();
		this.state = {subscribersList: [{id:1,name:"Siva",phone:"12344556"}]}
	}
	
	deleteSubscriberHandler = (subscriberId)=>{
		let subscribersList = this.state.subscribersList;
		let subscriberIndex = 0;
		subscribersList.forEach(function (subscriber, index){
		if(subscriber.id == subscriberId){
			subscriberIndex = index;
		}
		},this);
		let newsubscribers = subscribersList;
		newsubscribers.splice(subscriberIndex,1);
		this.setState({subscribersList:newsubscribers});
	}
	
	addSubscriberHandler = (newSubscriber) => {
		let subscribersList = this.state.subscribersList;
		if(subscribersList.length>0){
			newSubscriber.id = subscribersList[subscribersList.length-1].id+1;
		} else {
			newSubscriber.id = 1;
		}
		subscribersList.push(newSubscriber);
		this.setState({subscribersList: subscribersList});
		//console.log(this.state.subscribersList);
	}
	
	render (){
		//return(<AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>);
		//return(<ShowSubscribers subscribersList={this.state.subscribersList}/>);
		return (
		<Router>
		<Route exact path='/' render={(props)=><ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
		<Route exact path='/add' render={({history},props)=><AddSubscribers history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
		</Router>
		);
	}
}

export default PhoneDirectory;