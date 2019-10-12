import React, {Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';
class ShowSubscribers extends Component {

constructor(){
	super();
	this.state ={
		subscribersListToShow : []
	}
	console.log("Constructor called")
}

onDeleteClick = (subscriberId) => {
	this.props.deleteSubscriberHandler(subscriberId);
}

componentDidMount(){
	console.log("Component Did mount called")
	let newSubscriber ={
		id:1,
		name: "Sivabalan",
		phone: "9841728059"
	};
	
	let subscribersList = this.state.subscribersListToShow;
	subscribersList.push(newSubscriber);
	this.setState({subscribersListToShow: subscribersList});
}
	render (){
		console.log("Render method called")
		// let subscribers = [
	// {
		// id:1,
	// name:'Siva',
	// phone:'8888888888'
	// },
	// {
		// id:2,
	// name:'Balan',
	// phone:'9999999999'
	// }
	// ];
	
	
		return (
		<div className="component-container">
        <Header heading="Phone Directory"/>
      <div className="component-body-container">  
     <Link to="/add"><button className="addButton">Add</button></Link>
     <div className="grid-container">
       <span className="grid-item" className="name">Name</span>
       <span className="grid-item" className="phone">Phone</span>
	   <span className="grid-item dummy">Delete</span>
	   </div>
	   {
		   this.props.subscribersList.map(sub=>
		   {return (
		    <div key = {sub.id} className="grid-container">
       <span className="grid-item" className="name">{sub.name}</span>
       <span className="grid-item" className="phone">{sub.phone}</span>
	   <button className="grid-item" className="deleteButton" onClick={this.onDeleteClick.bind(this,sub.id)}>Delete</button>
	   </div>

		   )})
		   }
     </div>
	  </div>);
	}
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <p>UpGrad - Building Careers of Tomorrow!</p>
//         <App/>
//       </div>
//     );
//   }
// }
export default ShowSubscribers;
