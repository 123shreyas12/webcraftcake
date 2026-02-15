
import React from 'react';
import { Link } from 'react-router-dom';
// Added Cake to the imports from lucide-react
import { ChevronRight, ArrowRight, Utensils, Star, Clock, Cake } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-[#fdf2f5] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full text-pink-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.6,-0.7C84.4,14.3,78.5,28.6,70.5,41.2C62.5,53.8,52.3,64.7,39.9,71.5C27.5,78.3,13.7,81,-0.5,81.9C-14.7,82.8,-29.4,81.9,-42.6,75.6C-55.8,69.3,-67.5,57.7,-75.4,44C-83.3,30.3,-87.3,14.5,-86.6,0.4C-85.9,-13.7,-80.4,-26.1,-72.1,-36.8C-63.8,-47.5,-52.7,-56.4,-40.4,-64.1C-28.1,-71.8,-14.1,-78.3,0.7,-79.5C15.5,-80.7,31.2,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-bold tracking-widest uppercase mb-6 rounded-full">Artisan Bakery</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8 text-gray-800">
                Fresh & <span className="text-pink-500">Delicious</span> Cakes Every Day
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Handcrafted with love and the finest ingredients. Experience the magic of sweetness in every slice.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link
                  to="/shop"
                  className="bg-pink-500 text-white hover:bg-pink-600 px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-pink-200 inline-flex items-center group text-lg"
                >
                  Order Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-10 py-4 rounded-full font-bold transition-all inline-flex items-center text-lg"
                >
                  Contact Shop
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative z-10 rounded-full border-[16px] border-white shadow-2xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Delicious Cake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4 animate-bounce-slow">
                 <div className="bg-yellow-400 p-2 rounded-lg"><Star className="text-white fill-current" /></div>
                 <div>
                   <p className="font-bold text-gray-800 text-xl">4.9/5</p>
                   <p className="text-sm text-gray-500">2000+ Happy Customers</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="bg-pink-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <Utensils size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-3">Premium Ingredients</h4>
            <p className="text-gray-500">We use 100% organic flour, Belgian chocolate, and farm-fresh fruits.</p>
          </div>
          <div className="group">
            <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <Clock size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-3">Freshly Baked</h4>
            <p className="text-gray-500">Every cake is baked on the day of delivery to ensure maximum fluffiness.</p>
          </div>
          <div className="group">
            <div className="bg-yellow-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <Star size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-3">Custom Designs</h4>
            <p className="text-gray-500">Got a dream cake design? We can bring it to life for your special occasion.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#fff5f8]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-gray-800">Baking Dreams Into Reality</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto italic">
            "Welcome to Sweet Cake House, your neighborhood's favorite corner for all things sweet. Whether it's a birthday bash, a wedding vow, or just a Tuesday craving, our cakes are designed to sprinkle a little joy into your life. We believe in the power of a perfect slice!"
          </p>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Customer Favorites</span>
              <h2 className="text-5xl font-serif font-bold mt-2 text-gray-800">Featured Delights</h2>
            </div>
            <Link to="/shop" className="mt-6 md:mt-0 text-pink-600 font-bold flex items-center hover:underline text-lg">
              Explore Menu <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#4a3728] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {/* Cake is now properly imported from lucide-react above */}
            {[...Array(24)].map((_, i) => <Cake key={i} size={40} className="text-white m-4" />)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready for a Sugar Rush?</h2>
          <p className="text-2xl text-pink-200 mb-12 max-w-2xl mx-auto">Explore our full menu and order your favorite cake today via WhatsApp!</p>
          <Link
            to="/shop"
            className="bg-pink-500 text-white hover:bg-white hover:text-pink-500 px-12 py-5 rounded-full font-bold transition-all inline-block shadow-2xl text-xl"
          >
            Go to Cakes Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
