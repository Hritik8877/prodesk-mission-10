import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import Navbar from '../components/Navbar';
import { setSearchQuery } from '../Redux/FilterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - hidden on mobile unless toggled */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;