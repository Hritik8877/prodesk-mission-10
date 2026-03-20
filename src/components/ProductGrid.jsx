import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  const filters = useSelector((state) => state.filters);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];


    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    filtered = filtered.filter(p => 
      p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    );

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div>
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredProducts.length} products
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;