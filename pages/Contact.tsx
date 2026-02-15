
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to Sweet Cake House! We will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-80 bg-[#4a3728] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200&h=400" className="w-full h-full object-cover" alt="Bakery" />
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-white text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-pink-300 text-xl font-medium tracking-widest uppercase">We'd Love to Hear From You</p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">Visit Our Sweet Spot</h2>
                <p className="text-gray-600 leading-relaxed mb-12 text-lg italic">
                  Have a question about our flavors? Need a specialized cake for a big event? Or just want to say hi? Stop by our bakery or drop us a line!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-pink-100 p-4 rounded-2xl text-pink-600 shadow-sm">
                    <MapPin size={30} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Our Location</h4>
                    <p className="text-gray-600 text-lg">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 shadow-sm">
                    <Phone size={30} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Call Us</h4>
                    <p className="text-gray-600 text-lg">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-700 shadow-sm">
                    <Mail size={30} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Us</h4>
                    <p className="text-gray-600 text-lg">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-pink-500 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="flex items-center space-x-5">
                  <div className="bg-white/20 p-4 rounded-full">
                    <MessageCircle size={36} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">Direct Order</h4>
                    <p className="opacity-80">Instant support on WhatsApp</p>
                  </div>
                </div>
                <a 
                  href={CONTACT_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-lg"
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-pink-50">
              <h2 className="text-3xl font-serif font-bold mb-10 text-gray-800">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all text-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all text-lg appearance-none">
                    <option>Wedding Cake Request</option>
                    <option>Birthday Special Order</option>
                    <option>Corporate Gifts</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your dream cake..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all text-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-[#4a3728] text-white font-bold py-5 rounded-2xl transition-all duration-500 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl text-xl"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="relative h-96 w-full rounded-t-[5rem] overflow-hidden mt-20 shadow-inner">
        <iframe 
          title="Cake Shop Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.761005703875!2d77.6221191148215!3d12.93453889088031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898460d%3A0xcaec00057865f807!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
        ></iframe>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-2xl flex items-center space-x-2 font-bold text-gray-800">
           <Heart size={18} className="text-pink-500 fill-pink-500" />
           <span>Find us in Koramangala</span>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="white" />
      </a>
    </div>
  );
};

export default Contact;
