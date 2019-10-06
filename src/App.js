import React from 'react';
import Header from './Header';
import './App.css';

function App() {

  return (
   <div>
        <Header />
        
     <button>Add</button>
     <div>
       <span id="name">Name</span>
       <span id="phone">Phone</span>
     </div>
     </div>
  );
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
