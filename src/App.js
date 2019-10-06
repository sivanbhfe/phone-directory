import React from 'react';
import Header from './Header';

function App() {

  return (
   <div>
        <Header />
        
     <button>Add</button>
     <div>
       <span>Name:</span><br></br>
       <span>Phone:</span>
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
