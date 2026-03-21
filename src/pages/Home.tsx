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
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-600" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/90 text-sm font-medium">24/7 Service Available</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Drive Your Dreams{' '}
                  <span className="text-yellow-300">With Nova Cabs</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                  Your trusted partner for cab services, deliveries, rentals, and more.
                  Experience safe, comfortable, and affordable travel across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
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
                    className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">50K+</div>
                    <div className="text-sm text-white/70">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">100+</div>
                    <div className="text-sm text-white/70">Cities Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/70">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: 'Safe Rides', desc: 'Verified drivers & sanitized vehicles' },
                  { icon: Clock, title: 'On Time', desc: 'Punctual pickups & drop-offs' },
                  { icon: MapPin, title: 'Wide Coverage', desc: 'Multiple cities across India' },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-yellow-300" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Nova Cabs is India's leading transportation and logistics service provider
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90">
                  To become India's most trusted and innovative mobility solutions provider,
                  transforming the way people travel and transport goods.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To deliver exceptional transportation and logistics services through
                  innovation, technology, and dedicated service.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
                Our Services
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Comprehensive transportation and logistics solutions
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Car, title: 'Cab Service', desc: 'Local, Outstation, Airport, Corporate', color: 'bg-blue-500' },
                { icon: MapPin, title: 'Delivery Service', desc: 'Nova Store, Delivery Partners', color: 'bg-green-500' },
                { icon: Car, title: 'Rental Service', desc: 'Car & Bike Rentals', color: 'bg-orange-500' },
                { icon: Star, title: 'Advertisement', desc: 'Promote your business', color: 'bg-purple-500' },
              ].map((service) => (
                <a
                  key={service.title}
                  href="/services"
                  className="group bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </a>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '1000+', label: 'Fleet Size' },
                { number: '8+', label: 'Branch Offices' },
                { number: '50+', label: 'Franchise Partners' },
              ].map((stat) => (
                <div key={stat.label} className="text-center text-white">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 sm:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Book a ride, join our delivery network, or explore franchise opportunities.
                We are here to serve you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100 rounded-full px-8"
                >
                  <a href="/contact">Contact Us Now</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8"
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
