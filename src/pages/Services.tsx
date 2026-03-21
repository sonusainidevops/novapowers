import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Car,
  Package,
  Bike,
  Megaphone,
  MapPin,
  Plane,
  Building,
  ArrowRightLeft,
  Briefcase,
  ShoppingBag,
  Store,
  Handshake,
  Monitor,
  CheckCircle2,
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'cab',
    title: 'Cab Service',
    subtitle: 'Taxi',
    icon: Car,
    color: 'bg-blue-500',
    description: 'Reliable taxi services for all your travel needs',
    subServices: [
      { icon: MapPin, title: 'Local', desc: 'City rides at affordable rates' },
      { icon: ArrowRightLeft, title: 'Outstation', desc: 'Inter-city travel solutions' },
      { icon: Plane, title: 'Airport', desc: 'Timely airport transfers' },
      { icon: Building, title: 'Corporate', desc: 'Business travel services' },
      { icon: Car, title: 'Oneway', desc: 'One-way trip bookings' },
      { icon: Briefcase, title: 'Package', desc: 'Custom travel packages' },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery Service',
    subtitle: 'Logistics',
    icon: Package,
    color: 'bg-green-500',
    description: 'Fast and secure delivery solutions',
    subServices: [
      { icon: Store, title: 'Nova Store', desc: 'Our exclusive delivery platform' },
      { icon: Handshake, title: 'Delivery Partner', desc: 'Join our delivery network' },
      { icon: ShoppingBag, title: 'Store Vendor', desc: 'Partner with us for deliveries' },
    ],
  },
  {
    id: 'rental',
    title: 'Rental Service',
    subtitle: 'Rentals',
    icon: Bike,
    color: 'bg-orange-500',
    description: 'Flexible vehicle rental options',
    subServices: [
      { icon: Car, title: 'Car Rental', desc: 'Self-drive & chauffeur options' },
      { icon: Bike, title: 'Bike Rental', desc: 'Two-wheeler rentals' },
    ],
  },
  {
    id: 'advertisement',
    title: 'Advertisement Service',
    subtitle: 'Marketing',
    icon: Megaphone,
    color: 'bg-purple-500',
    description: 'Promote your business with us',
    subServices: [
      { icon: Store, title: 'Local Business Ads', desc: 'Promote your local business' },
      { icon: Monitor, title: 'Nova Channel Partner', desc: 'Advertise on taxi screens, shops, salons' },
    ],
  },
];

const cabTypes = [
  { name: 'Hatchback', seats: '4 Seats', price: '₹12/km', color: 'bg-yellow-400' },
  { name: 'Sedan', seats: '4 Seats', price: '₹15/km', color: 'bg-blue-400' },
  { name: 'SUV', seats: '6-7 Seats', price: '₹20/km', color: 'bg-red-400' },
  { name: 'Luxury', seats: '4 Seats', price: '₹35/km', color: 'bg-purple-400' },
];

const features = [
  '24/7 Customer Support',
  'GPS Tracked Rides',
  'Verified Drivers',
  'Multiple Payment Options',
  'Real-time Booking',
  'Corporate Billing',
];

const Services = () => {
  const [activeService, setActiveService] = useState('cab');
  const currentService = serviceCategories.find((s) => s.id === activeService);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Comprehensive transportation and logistics solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceCategories.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    activeService === service.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <service.icon className="w-5 h-5" />
                  <span>{service.title}</span>
                </button>
              ))}
            </div>

            {/* Active Service Content */}
            {currentService && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {currentService.subServices.map((sub) => (
                    <Card key={sub.title} className="group hover:shadow-xl transition-all border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 ${currentService.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                          <sub.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{sub.title}</h3>
                        <p className="text-slate-600">{sub.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {activeService === 'cab' && (
                  <div className="bg-slate-50 rounded-3xl p-8 sm:p-12">
                    <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
                      Choose Your Ride
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cabTypes.map((cab) => (
                        <div
                          key={cab.name}
                          className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow group"
                        >
                          <div className={`w-20 h-20 ${cab.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Car className="w-10 h-10 text-white" />
                          </div>
                          <h4 className="font-bold text-lg text-slate-900">{cab.name}</h4>
                          <p className="text-slate-500 text-sm mt-1">{cab.seats}</p>
                          <p className="text-primary font-semibold mt-2">{cab.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Why Choose Our Services?
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  We combine technology with excellent service delivery to provide you with
                  the best transportation experience possible.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Book a Service</h3>
                <p className="text-slate-600 mb-6">
                  Ready to experience our services? Get in touch with us today.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6">
                  <a href="/contact">
                    Contact Us Now
                    <ArrowRightLeft className="w-5 h-5 ml-2" />
                  </a>
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

export default Services;
