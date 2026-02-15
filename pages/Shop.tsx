
import React, { useState } from 'react';
import { Filter, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const categories: Category[] = ['All', 'Birthday', 'Chocolate', 'Wedding', 'Cupcakes'];

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#fff5f8] py-24 border-b border-pink-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6 tracking-tight">Cakes Menu</h1>
          <p className="text-pink-500 font-medium max-w-xl mx-auto text-xl italic">Indulge in our collection of heavenly treats crafted for every special occasion.</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <div className="flex justify-around items-center h-full">
              <ShoppingBag size={100} className="text-pink-300 rotate-12" />
              <ShoppingBag size={150} className="text-pink-300 -rotate-12" />
              <ShoppingBag size={80} className="text-pink-300 rotate-45" />
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center space-x-3 mb-10 border-b border-pink-100 pb-4">
                <Filter size={24} className="text-pink-500" />
                <h3 className="text-2xl font-serif font-bold text-gray-800">Categories</h3>
              </div>
              <nav className="flex flex-wrap lg:flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-bold ${
                      activeCategory === cat 
                        ? 'bg-pink-500 text-white shadow-xl shadow-pink-100' 
                        : 'text-gray-600 bg-gray-50 hover:bg-pink-50 hover:text-pink-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>

              <div className="mt-16 p-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2rem] text-white shadow-2xl hidden lg:block overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="font-bold text-2xl mb-4">Need a Custom Cake?</h4>
                  <p className="text-pink-100 mb-8">We create bespoke masterpieces based on your theme!</p>
                  <a href="#/contact" className="inline-block bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">Get Quote</a>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <Cake size={160} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">
              <p className="text-gray-500 text-lg italic">
                Sweet treats for <span className="font-bold text-pink-500 uppercase">{activeCategory}</span>
              </p>
              <div className="text-sm font-bold text-gray-400">Total {filteredProducts.length} Items</div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-40 text-center">
                <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-pink-300">
                  <ShoppingBag size={48} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-400">No cakes found in this category.</h3>
                <button onClick={() => setActiveCategory('All')} className="mt-6 text-pink-500 font-bold hover:underline">Show All Menu</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

import { Cake } from 'lucide-react';
export default Shop;
