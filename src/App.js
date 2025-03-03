import React, { useState, useEffect } from 'react';

const App = () => {
  // State for services section
  const [activeService, setActiveService] = useState(0);
  
  // State for testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const soon = () => {
    alert("Sorry! This Service will be available soon")
  }
  // Handle form submission

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `New Inquiry:
    🔹 Name: ${formData.name}
    📧 Email: ${formData.email}
    📞 Phone: ${formData.phone}
    💬 Message: ${formData.message}`;

    const telegramURL = `https://api.telegram.org/bot8077154781:AAGkAqHowRF67PTeoE097XZIY324-5wLZ_w/sendMessage?chat_id=1042425002&text=${encodeURIComponent(text)}`;

    try {
      await fetch(telegramURL);
      setSuccessMessage("✅ Your message has been sent! Our team will contact you soon.");
      
      // Clear the form after submission
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      setSuccessMessage("❌ Failed to send message. Please try again.");
    }
  };
  
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Services data
  const services = [
    {
      title: "Wash & Fold",
      description: "Our signature service - we'll wash, dry, and neatly fold your laundry within 24 hours.",
      price: "Starting at ₹20/item",
      icon: "🧺"
    },
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning for your delicate garments, suits, dresses and formal wear.",
      price: "Starting at ₹50/item",
      icon: "👔"
    },
    {
      title: "Express Service",
      description: "Need it faster? Our express service delivers your clean laundry in just 8 hours.",
      price: "50% surcharge",
      icon: "⚡"
    },
    {
      title: "Stain Removal",
      description: "Our experts can tackle even the toughest stains with our specialized treatments.",
      price: "Starting at ₹50/stain",
      icon: "✨"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      name: "Deepak Sharma",
      text: "Dev Drycleaners has completely changed my life! No more spending weekends doing laundry. Their service is prompt and my clothes come back perfectly folded every time.",
      rating: 5
    },
    {
      name: "Sunny Rathore",
      text: "As a busy professional, I don't have time for laundry. Dev Drycleaners pickup and delivery service is a lifesaver. Their stain removal is impressive too!",
      rating: 5
    },
    {
      name: "Rekha Aggarwal",
      text: "I've tried several laundry services in town, and Dev Drycleaners is by far the best. Their attention to detail and care for fabrics is unmatched.",
      rating: 4
    }
  ];
  
  // Business hours
  const hours = [
    { day: "Monday", hours: "9:00 AM - 9:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
    { day: "Friday", hours: "9:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM" }
  ];

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl mr-2">💧</span>
            <h1 className="text-2xl font-bold">Dev Drycleaners</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-200 transition duration-300">Services</a>
            <a href="#about" className="hover:text-blue-200 transition duration-300">About</a>
            <a href="#testimonials" className="hover:text-blue-200 transition duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-blue-200 transition duration-300">Contact</a>
          </div>
          <a href="#contact">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Book Now
          </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">👕</div>
          <div className="absolute top-40 right-20 text-9xl">👖</div>
          <div className="absolute bottom-10 left-1/3 text-9xl">🧦</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">Fresh Clothes, <span className="text-yellow-300">Zero Effort</span></h1>
            <p className="text-xl mb-8">Let us handle your laundry while you focus on what matters most. Professional washing, folding and delivery services at your fingertips.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition duration-300">
                Our Services
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-700 transition duration-300">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery</h3>
              <p className="text-gray-600">Schedule a pickup and we'll collect and deliver your laundry right to your door at no extra cost.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2">24-Hour Turnaround</h3>
              <p className="text-gray-600">Get your clean clothes back in just 24 hours with our standard service. Express options available.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600">We use environmentally friendly detergents that are gentle on your clothes and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer a comprehensive range of laundry and dry cleaning services to meet all your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex overflow-x-auto pb-4 space-x-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 whitespace-nowrap rounded-full ${activeService === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 border border-gray-300'}`}
                    onClick={() => setActiveService(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 bg-white p-8 rounded-xl shadow-md min-h-64">
                <div className="text-6xl mb-4">{services[activeService].icon}</div>
                <h3 className="text-2xl font-bold mb-2">{services[activeService].title}</h3>
                <p className="text-gray-600 mb-4">{services[activeService].description}</p>
                <div className="font-bold text-blue-600 text-xl">{services[activeService].price}</div>
                <a href="#contact">
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Book This Service
                </button>
                </a>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Schedule a Pickup</h4>
                    <p className="text-blue-100">Use our app or website to book a convenient time for us to collect your laundry.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">We Clean Your Clothes</h4>
                    <p className="text-blue-100">Our professionals sort, treat stains, wash, dry and fold your items with care.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Delivery to Your Door</h4>
                    <p className="text-blue-100">We'll deliver your fresh, clean laundry back to you at your requested time.</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact">
              <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Contact us!
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Dev Drycleaners</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1990, Dev Drycleaners has been providing premium laundry services to our community with a commitment to quality, convenience, and sustainability.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of experienced professionals treats every garment with care, using eco-friendly products and energy-efficient machines to deliver exceptional results while minimizing our environmental impact.
              </p>
              <p className="text-lg text-gray-700">
                We believe that everyone deserves more time for what matters most. That's why we've designed our services to be as convenient and hassle-free as possible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Business Hours</h3>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-bold text-xl mb-2 text-blue-800">Holiday Hours</h4>
                <p className="text-gray-700">We operate with modified hours during major holidays. Please check our availability or call us for the most up-to-date information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Don't just take our word for it. Here's what our happy customers have to say about our services.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg relative">
              <div className="text-6xl text-blue-200 absolute top-4 left-4 opacity-20">"</div>
              
              <div className="relative z-10">
                <p className="text-xl mb-6">{testimonials[activeTestimonial].text}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
                  </div>
                  
                  <div className="flex text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < testimonials[activeTestimonial].rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`h-3 w-3 rounded-full ${activeTestimonial === index ? 'bg-white' : 'bg-blue-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions or ready to experience our service? Reach out to us today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
                >
                  Send Message
                </button>
                {successMessage && (
                  <p className="mt-4 text-green-600 font-medium text-center">{successMessage}</p>
                )}
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl text-blue-600 mr-4">📍</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-gray-600">Kunj Vihar, Sri Ganganagar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl text-blue-600 mr-4">📞</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">8955170502</p>
                      <p className="text-gray-600">9783473502</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl text-blue-600 mr-4">✉️</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-600">imlavishkhatua786@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                        <span>f</span>
                      </a>
                      <a href="#" className="bg-blue-400 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300">
                        <span>t</span>
                      </a>
                      <a href="https://www.instagram.com/devdrycleaner/" className="bg-pink-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
                        <span>i</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Never Do Laundry Again?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have reclaimed their time by letting us handle their laundry needs.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2">💧</span>
                <h3 className="text-xl font-bold">Dev Drycleaners</h3>
              </div>
              <p className="text-gray-400">Making laundry day a thing of the past since 1990.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Wash & Fold</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dry Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Express Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Stain Removal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Download Our App</h4>
              <p className="text-gray-400 mb-4">Get exclusive offers and schedule pickups on the go with our mobile app.</p>
              <div className="flex space-x-4">
                <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300" onClick={soon}>
                  App Store
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300" onClick={soon}>
                  Google Play
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dev Drycleaners Laundry Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;