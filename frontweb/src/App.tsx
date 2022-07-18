import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';
import { StoreFilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<StoreFilterData>();

  const onFilterChange = (filter: StoreFilterData) => {
    setFilterData(filter);
  };
  return (
    <div>
      <Navbar/>
      <Filter onSubmitFilter={onFilterChange}/>
      <PieChart filterData={filterData}/>
    </div>
  );
}

export default App;
