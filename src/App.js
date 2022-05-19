import logo from './logo.svg';
import './App.css';
import { MobileOs } from './components/MobileOs';
import { MobileManufacturers } from './components/MobileManufacturers';

function App() {
  return (
    <div className="App">
      <MobileOs/>
      <MobileManufacturers/>
    </div>
  );
}

export default App;
