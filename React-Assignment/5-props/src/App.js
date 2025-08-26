import logo from './logo.svg';
import './App.css';
import Usercard from "./Usercards";


function App() {
  return (
 <div>
      <Usercard name="smit patel" age={25} location="India" />
      <Usercard name="John Doe" age={30} location="USA" />
    </div>
  );
}

export default App;
