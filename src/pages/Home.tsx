import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Car,
  Shield,
  Clock,
  MapPin,
  ArrowRight,
  Target,
  Eye,
  Users,
  Star,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-50 -skew-x-12 translate-x-1/4" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-black text-sm font-medium">24/7 Service Available</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                  Drive Your Dreams{' '}
                  <span className="text-yellow-500">With Nova Cabs</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                  Your trusted partner for cab services, deliveries, rentals, and more.
                  Experience safe, comfortable, and affordable travel across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8 py-6 text-lg"
                  >
                    <a href="/services">
                      Explore Services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-black">50K+</div>
                    <div className="text-sm text-gray-500">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-black">100+</div>
                    <div className="text-sm text-gray-500">Cities Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-black">24/7</div>
                    <div className="text-sm text-gray-500">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Safe Rides', desc: 'Verified drivers & sanitized vehicles' },
                  { icon: Clock, title: 'On Time', desc: 'Punctual pickups & drop-offs' },
                  { icon: MapPin, title: 'Wide Coverage', desc: 'Multiple cities across India' },
                  { icon: Star, title: 'Best Price', desc: 'Affordable rates guaranteed' },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-black font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nova Cabs is India's leading transportation and logistics service provider
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-400 rounded-2xl p-8 sm:p-10 text-black">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-black/80">
                  To become India's most trusted and innovative mobility solutions provider,
                  transforming the way people travel and transport goods.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional transportation and logistics services through
                  innovation, technology, and dedicated service.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive transportation and logistics solutions
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Car, title: 'Cab Service', desc: 'Local, Outstation, Airport, Corporate' },
                { icon: MapPin, title: 'Delivery', desc: 'Nova Store, Delivery Partners' },
                { icon: Car, title: 'Rental', desc: 'Car & Bike Rentals' },
                { icon: Star, title: 'Advertisement', desc: 'Promote your business' },
              ].map((service) => (
                <a
                  key={service.title}
                  href="/services"
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                    <service.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.desc}</p>
                </a>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8">
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '1000+', label: 'Fleet Size' },
                { number: '8+', label: 'Branch Offices' },
                { number: '50+', label: 'Franchise Partners' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-400 rounded-3xl p-8 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
                Book a ride, join our delivery network, or explore franchise opportunities.
                We are here to serve you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-8"
                >
                  <a href="/contact">Contact Us Now</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8"
                >
                  <a href="/franchise">Explore Franchise</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
