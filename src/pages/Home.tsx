import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSeo } from '@/hooks/use-seo';
import {
  Car,
  Shield,
  Clock,
  MapPin,
  ArrowRight,
  Target,
  Eye,
  Star,
  Package,
  Bike,
  Megaphone,
} from 'lucide-react';

const Home = () => {
  useSeo({
    title: 'Nova Powers | Smart Cab Booking, Delivery & Rentals',
    description:
      'Nova Powers is a smart and affordable cab booking app to find nearby Rikshaw, Car, and Bike rides with real-time location, wallet payments, and refer & earn.',
    keywords:
      'Nova Powers, taxi, cab, rikshaw, car, bike, delivery, rentals, outstation, airport, corporate',
    image: '/hero.png',
  });
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-black text-sm font-medium">24/7 Service Available</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                  Drive Your Dreams{' '}
                  <span className="text-yellow-500">With Nova Powers</span>
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
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                    <img src="/hero.png" alt="Nova Powers hero" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cab Service Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center border border-gray-100">
                    <img
                      src="/assets/home/WhatsApp Image 2026-03-24 at 9.40.28 AM.jpeg"
                      alt="Cab service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Service 01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Cab Service (Taxi)
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Experience premium cab services for all your travel needs. Whether it's a quick local ride, 
                  an outstation journey, airport transfer, or corporate travel, we've got you covered with 
                  our fleet of well-maintained vehicles and professional drivers.
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Local Rides
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Outstation
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Airport Transfer
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Corporate Travel
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Oneway Trip
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Package Tours
                  </li>
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                >
                  <a href="/services#cab">
                    View Cab Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Service Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Service 02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Delivery Service
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Fast, reliable, and secure delivery solutions for your business and personal needs. 
                  Join our Nova Store platform, become a delivery partner, or partner with us as a 
                  store vendor to reach more customers across India.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Nova Store</h4>
                      <p className="text-gray-500 text-sm">Our exclusive delivery platform for quick commerce</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Delivery Partner</h4>
                      <p className="text-gray-500 text-sm">Join our delivery network and earn</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Store Vendor</h4>
                      <p className="text-gray-500 text-sm">Partner with us for seamless deliveries</p>
                    </div>
                  </li>
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                >
                  <a href="/services#delivery">
                    View Delivery Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center">
                    <img
                      src="/assets/home/WhatsApp Image 2026-03-24 at 9.40.29 AM.jpeg"
                      alt="Delivery service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Service Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center border border-gray-100">
                    <img
                      src="/assets/home/WhatsApp Image 2026-03-24 at 9.40.30 AM.jpeg"
                      alt="Rental service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Bike className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Service 03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Rental Service
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Flexible vehicle rental options for your convenience. Choose from our wide range 
                  of cars and bikes available for self-drive or with chauffeur. Perfect for 
                  weekend getaways, business trips, or daily commuting needs.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <Car className="w-10 h-10 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-black mb-2">Car Rental</h4>
                    <p className="text-gray-500 text-sm">Self-drive & chauffeur options available</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <Bike className="w-10 h-10 text-yellow-500 mb-3" />
                    <h4 className="font-bold text-black mb-2">Bike Rental</h4>
                    <p className="text-gray-500 text-sm">Two-wheeler rentals for quick trips</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                >
                  <a href="/services#rental">
                    View Rental Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement Service Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Service 04</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Advertisement Service
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Promote your business with Nova Powers' innovative advertising solutions. 
                  Reach thousands of potential customers through our extensive network of 
                  taxis, shops, salons, and material stores across multiple cities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">Local Business Ads</h4>
                      <p className="text-gray-500 text-sm">Promote your local business to targeted audiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Megaphone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">Nova Channel Partner</h4>
                      <p className="text-gray-500 text-sm">Advertise on screens in taxis, shops, salons, material stores</p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                >
                  <a href="/services#advertisement">
                    View Advertisement Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center p-8">
                      <Megaphone className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                      <p className="text-gray-500">Advertisement Service Image</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="bg-black rounded-3xl p-8 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Book a ride, join our delivery network, or explore franchise opportunities.
                We are here to serve you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                >
                  <a href="/contact">Contact Us Now</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full px-8"
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
