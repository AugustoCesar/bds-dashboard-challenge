import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';

function App() {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <PieChart/>
    </div>
  );
}

export default App;
