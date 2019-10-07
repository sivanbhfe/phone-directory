import React, {Component} from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
	
	render (){
		let subscribers = [
	{
		id:1,
	name:'Siva',
	phone:'8888888888'
	},
	{
		id:2,
	name:'Balan',
	phone:'9999999999'
	}
	];
		return (
		<div className="component-container">
        <Header />
      <div className="component-body-container">  
     <button>Add</button>
     <div className="grid-container">
       <span className="grid-item" className="name">Name</span>
       <span className="grid-item" className="phone">Phone</span>
	   <span className="grid-item"></span>
	   </div>
	   {
		   subscribers.map(sub=>
		   {return (
		    <div key = {sub.id} className="grid-container">
       <span className="grid-item" className="name">{sub.name}</span>
       <span className="grid-item" className="phone">{sub.phone}</span>
	   <button className="grid-item" className="deleteButton">Delete</button>
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
export default App;
