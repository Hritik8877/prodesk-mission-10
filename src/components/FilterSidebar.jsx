import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPriceRange, setSortBy, resetFilters } from '../Redux/FilterSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const categories = ['all', 'electronics', 'clothing', 'accessories', 'home'];

  const handlePriceChange = (type, value) => {
    dispatch(setPriceRange({
      ...filters.priceRange,
      [type]: Number(value)
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={(e) => dispatch(setCategory(e.target.value))}
                className="mr-2"
              />
              <span className="capitalize">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Min: ₹{filters.priceRange.min}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Max: ₹{filters.priceRange.max}</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;