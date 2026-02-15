
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `${CONTACT_INFO.whatsapp}?text=Hi! I want to order the delicious ${product.name} (₹${product.price}). Please let me know the availability!`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-pink-50 flex flex-col h-full hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-pink-500 font-bold text-lg mb-6">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        
        <div className="mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white py-3 rounded-xl font-bold transition-all duration-300 border border-pink-100"
          >
            <MessageCircle size={18} />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
