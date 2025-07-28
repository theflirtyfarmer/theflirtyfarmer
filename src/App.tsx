import React from 'react';
import { Leaf, Instagram, Facebook, MapPin, Phone, Mail, Heart, Sprout, Flower, Clock, TreePine, Sun, Droplets, Users, Award, BookOpen, Briefcase } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4 h-auto py-4 md:h-24">
            {/* ロゴ＋テキスト */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 p-3 rounded-xl shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-xl md:text-2xl font-bold text-gray-800">The Flirty Farmer</span>
                <p className="text-sm text-emerald-600 font-medium">Licensed Nursery & Hemp Business</p>
              </div>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex items-center flex-wrap space-x-4 lg:space-x-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                My Story
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("plants")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                What We Grow
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Mission
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("consulting")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Consulting
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-md"
              >
                Contact
              </a>
            </nav>

          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-emerald-800/60 to-green-700/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/30">
              <TreePine className="h-5 w-5 mr-2" />
              Licensed Nursery & Hemp Business • Seminole County, Florida
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            The Flirty Farmer
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
            Rooted in knowledge. Grown with intention.

            <br />

            Where backyard dreams took root and blossomed into something much bigger.

            <br />

            From houseplants to hemp — cultivated by hand, with heart.
          </p>


          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Discover My Story
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("consulting")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-xl"
            >
              Consulting Services
            </a>
          </div>

        </div>

        {/* Floating nature elements */}
        <div className="absolute bottom-10 left-10 text-white/30">
          <Leaf className="h-16 w-16 animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 text-white/20">
          <Flower className="h-12 w-12 animate-bounce" />
        </div>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614469217889-869518fe2d9c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf className="h-4 w-4 mr-2" />
              My Story
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hi, I'm Sara, the woman behind The Flirty Farmer</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                What started as a simple hobby — nurturing houseplants and learning to grow from the soil up — has blossomed into something much deeper.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After spending years studying Florida's agriculture and hemp industries, I transformed my home into a licensed nursery and began helping others start their own journeys into farming.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, The Flirty Farmer is both a physical space and a growing mission: to educate, cultivate, and empower — all with a little bit of charm and a lot of dirt under the nails.
              </p>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                <p className="text-emerald-800 font-medium italic">
                  "Whether I'm in the garage nursery potting fresh herbs or consulting with a new hemp startup, I'm living proof that farming doesn't need to look traditional to be powerful."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-6 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sara in her nursery"
                  className="w-full h-96 rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 p-4 rounded-full shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 p-4 rounded-full shadow-lg">
                <Flower className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Grow Section */}
      <section id="plants" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sprout className="h-4 w-4 mr-2" />
              What We Grow
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Than Just Pretty Plants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here at The Flirty Farmer, we're proud to grow more than just pretty plants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Flora Luxe™ */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?q=80&w=1543&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Flora Luxe hemp flower"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🌾 Flora Luxe™
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flora Luxe™</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Flirty Farmer is your go-to source for premium, compliant THCa products and intentional wellness
                  solutions grown with heart. Using a blend of deep agricultural know-how and cutting-edge techniques,
                  we offer high-quality THCa flower, specialty blends, and concentrates — all 100% federally legal. From
                  seed to shelf, every product is rigorously tested for purity and consistency, and we partner with
                  top-tier growers to ensure nothing but the best. Whether it’s vapes, gummies, or flower, our
                  formulations are crafted to boost absorption and elevate your experience. Loved by customers and trusted
                  by retailers, The Flirty Farmer is proud to be growing a new standard in plant-powered wellness.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Premium hemp flower for wholesale, resale, and compliant use under Florida Agricultural License
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Fully compliant & licensed
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Quality tested
                  </div>
                </div>
              </div>
            </div>

            {/* Fresh Picks */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fresh Picks"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🌿 Fresh Picks
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fresh Picks</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Where tiny greens, bold blooms, and homegrown goodness take center stage. From vibrant microgreens
                  to lush houseplants, everything you see here is lovingly grown with care, intention, and a little
                  flirty flair. Whether you’re adding freshness to your plate or beauty to your space, each plant
                  is a piece of our farm-to-home journey. Dig in, grow with us, and bring a little joy to your daily ritual.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Fresh herbs & culinary plants
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Lush houseplants
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Microgreens & decorative blooms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1444930694458-01babf71870c?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4 mr-2" />
              My Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nurturing Growth From the Ground Up</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether that's in the form of soil, knowledge, or community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-lg transition-all duration-300 border border-emerald-100">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Honest, Earth-First Growing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Sustainable practices that respect the land and produce healthy, vibrant plants.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-lg transition-all duration-300 border border-emerald-100">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Empowering Through Education</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Sharing knowledge through agricultural consulting and mentorship programs.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-lg transition-all duration-300 border border-emerald-100">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporting Florida's Hemp Economy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Contributing to the growth of Florida's emerging hemp industry with quality products.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-lg transition-all duration-300 border border-emerald-100">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safe Space for Women in Farming</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Creating an inclusive environment where women can thrive in agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section id="consulting" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              Consulting Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thinking About Starting Your Own Nursery or Hemp Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a licensed agricultural consultant, I offer guidance and mentorship to help you build your dream
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Setup & Licensing</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hemp & Nursery License Guidance</h4>
                    <p className="text-gray-600">Navigate Florida's licensing requirements with expert support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zoning & Compliance Support</h4>
                    <p className="text-gray-600">Ensure your operation meets all local and state regulations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Business Setup Help</h4>
                    <p className="text-gray-600">From business plans to operational systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Growing & Mentorship</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Sprout className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Growing Consultations</h4>
                    <p className="text-gray-600">Learn proven techniques for Florida's unique climate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Startup Mentorship</h4>
                    <p className="text-gray-600">One-on-one guidance through your agricultural journey</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Continued partnership as your business grows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Your Dream — Together</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your agricultural journey? Schedule a consultation to discuss your goals and create a roadmap for success.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // URLに#contactがつくのを防ぐ
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md inline-block"
              >
                Schedule Consultation
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit The Flirty Farmer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Altamonte Springs, Florida
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      108 Beach Ave<br />
                      Altamonte Springs, FL 31801<br />
                      Licensed Nursery and Hemp Wholesaler
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 break-all">Sara@theflirtyfarmer.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a
                      href="https://www.instagram.com/theflirtyfarmer420/?igsh=MXUwZWdocnBiam1uNw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      @theflirtyfarmer420
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Hours</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">By Appointment</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-emerald-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-emerald-600" />
                  <span className="font-semibold text-emerald-800">Please Call Ahead</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  As a working agricultural facility, advance notice helps ensure the best experience for your visit and consultation needs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const mailtoLink = `mailto:sara@theflirtyfarmer.com?subject=${encodeURIComponent(subject || 'General Inquiry')}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`;

                  window.location.href = mailtoLink;
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="Nursery Stock Inquiry">Nursery Stock Inquiry</option>
                    <option value="Hemp Products">Hemp Products</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Custom Orders">Custom Orders</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Social Media Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618870722312-8c83db437612?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-800/85 to-emerald-700/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-2xl">Follow My Plant Journey</h2>
          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-xl leading-relaxed">
            Join me on social media for daily plant updates, care tips, and behind-the-scenes content from my garage nursery!
          </p>

          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://www.instagram.com/theflirtyfarmer420/?igsh=MXUwZWdocnBiam1uNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-700 p-6 rounded-full hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
            >
              <Instagram className="h-12 w-12" />
            </a>
            <a
              href="https://www.facebook.com/share/1GRBsNA5WR/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-700 p-6 rounded-full hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
            >
              <Facebook className="h-12 w-12" />
            </a>

          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/15 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-white drop-shadow-lg">
                <Instagram className="h-8 w-8 mr-4" />
                Instagram
              </h3>
              <p className="text-white mb-4 font-bold text-lg drop-shadow-md">@theflirtyfarmer420</p>
              <p className="text-white text-lg leading-relaxed drop-shadow-md">
                Daily plant stories, hemp growing updates, and behind-the-scenes content from the garage nursery to licensed facility journey.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-white drop-shadow-lg">
                <Facebook className="h-8 w-8 mr-4" />
                Facebook
              </h3>
              <p className="text-white mb-4 font-bold text-lg drop-shadow-md">The Flirty Farmer</p>
              <p className="text-white text-lg leading-relaxed drop-shadow-md">
                Join our community of plant lovers and aspiring farmers! Share your journey, ask questions, and get consulting advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">The Flirty Farmer</span>
                  <p className="text-sm text-gray-400">Licensed Nursery & Hemp Business</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                From backyard dreams to licensed agricultural business. Growing plants, hemp, and empowering others in Seminole County, Florida.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/theflirtyfarmer420/?igsh=MXUwZWdocnBiam1uNw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1GRBsNA5WR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>

              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">What We Grow</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nursery Stock</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hemp Flower</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seasonal Offerings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Agricultural Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License Guidance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Setup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Growing Mentorship</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 The Flirty Farmer. Licensed Agricultural Business • Altamonte Springs, Florida
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;