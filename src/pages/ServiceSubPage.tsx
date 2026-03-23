import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import NotFound from '@/pages/NotFound';
import { useParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowRightLeft,
  Bike,
  Briefcase,
  Building,
  Car,
  CheckCircle2,
  Handshake,
  MapPin,
  Megaphone,
  Monitor,
  Package,
  Plane,
  ShoppingBag,
  Store,
  type LucideIcon,
} from 'lucide-react';

type ServiceInfo = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

type CategoryInfo = {
  categoryTitle: string;
  categorySubtitle: string;
  categoryIcon: LucideIcon;
  backHref: string;
  services: Record<string, ServiceInfo>;
};

const servicePages: Record<string, CategoryInfo> = {
  cab: {
    categoryTitle: 'Cab Service',
    categorySubtitle: 'Taxi',
    categoryIcon: Car,
    backHref: '/services#cab',
    services: {
      local: {
        title: 'Local Cab Service',
        description: 'Comfortable city rides with verified drivers and transparent pricing.',
        icon: MapPin,
        highlights: [
          'City rides for daily commute and quick travel',
          'Clean, comfortable vehicles',
          'On-time pickup and drop',
          '24/7 support for bookings and assistance',
        ],
      },
      outstation: {
        title: 'Outstation Cab Service',
        description: 'Reliable inter-city travel solutions for families, groups, and business trips.',
        icon: ArrowRightLeft,
        highlights: [
          'One-day and multi-day trips',
          'Experienced highway drivers',
          'Comfort-first travel planning',
          'Flexible pickup and drop options',
        ],
      },
      airport: {
        title: 'Airport Cab Service',
        description: 'Timely airport transfers with hassle-free booking and punctual pickups.',
        icon: Plane,
        highlights: [
          'Punctual airport pickup and drop',
          'Flight-time friendly scheduling',
          'Luggage-friendly vehicles',
          'Support for early morning and late-night trips',
        ],
      },
      corporate: {
        title: 'Corporate Cab Service',
        description: 'Professional travel services for teams, meetings, and recurring business travel.',
        icon: Building,
        highlights: [
          'Corporate travel support',
          'Professional drivers and well-maintained vehicles',
          'Consistent service quality',
          'Flexible trip scheduling',
        ],
      },
      oneway: {
        title: 'One-way Cab Service',
        description: 'Book a one-way trip with simple pricing and convenient route options.',
        icon: Car,
        highlights: [
          'One-way trip bookings',
          'Convenient pickup and destination options',
          'Comfortable travel experience',
          'Easy booking and support',
        ],
      },
      package: {
        title: 'Cab Packages',
        description: 'Custom travel packages designed for your plan, timing, and budget.',
        icon: Briefcase,
        highlights: [
          'Custom itinerary planning',
          'Hourly and daily package options',
          'Suitable for tours and family travel',
          'Dedicated booking assistance',
        ],
      },
    },
  },
  delivery: {
    categoryTitle: 'Delivery Service',
    categorySubtitle: 'Logistics',
    categoryIcon: Package,
    backHref: '/services#delivery',
    services: {
      'nova-store': {
        title: 'Nova Store',
        description: 'Our exclusive delivery platform for faster, safer, and trackable deliveries.',
        icon: Store,
        highlights: [
          'Fast and secure deliveries',
          'Reliable pickup and drop process',
          'Support for local business operations',
          'Customer-first delivery experience',
        ],
      },
      'delivery-partner': {
        title: 'Delivery Partner',
        description: 'Join our delivery network and grow with consistent order opportunities.',
        icon: Handshake,
        highlights: [
          'Partner onboarding support',
          'Flexible earning opportunities',
          'Operational assistance and guidance',
          'Work with a growing network',
        ],
      },
      'store-vendor': {
        title: 'Store Vendor',
        description: 'Partner with Nova Powers to deliver your store items efficiently and reliably.',
        icon: ShoppingBag,
        highlights: [
          'Vendor-friendly delivery solutions',
          'Support for timely dispatch',
          'Smooth customer experience',
          'Scalable delivery coverage',
        ],
      },
    },
  },
  rental: {
    categoryTitle: 'Rental Service',
    categorySubtitle: 'Rentals',
    categoryIcon: Bike,
    backHref: '/services#rental',
    services: {
      'car-rental': {
        title: 'Car Rental',
        description: 'Flexible car rental options for travel, work, and everyday needs.',
        icon: Car,
        highlights: [
          'Self-drive and chauffeur options',
          'Clean and well-maintained cars',
          'Flexible rental duration',
          'Easy booking and support',
        ],
      },
      'bike-rental': {
        title: 'Bike Rental',
        description: 'Two-wheeler rentals for local commute and convenient travel.',
        icon: Bike,
        highlights: [
          'Affordable bike rental plans',
          'Ideal for daily commute',
          'Quick booking process',
          'Support and assistance available',
        ],
      },
    },
  },
  advertisement: {
    categoryTitle: 'Advertisement Service',
    categorySubtitle: 'Marketing',
    categoryIcon: Megaphone,
    backHref: '/services#advertisement',
    services: {
      'local-business-ads': {
        title: 'Advertisement of Local Business',
        description: 'Promote your local business to the right audience with Nova Powers.',
        icon: Store,
        highlights: [
          'Local business promotion support',
          'Better visibility in your service area',
          'Flexible advertisement options',
          'Assistance with campaign setup',
        ],
      },
      'nova-channel-partner': {
        title: 'Nova Channel Partner',
        description: 'Advertise on taxi screens and partner spaces like shops, salons, and stores.',
        icon: Monitor,
        highlights: [
          'High-visibility screen advertising',
          'Reach customers in everyday locations',
          'Suitable for multiple business types',
          'Support for partner onboarding',
        ],
      },
    },
  },
};

const ServiceSubPage = () => {
  const params = useParams<{ category?: string; service?: string }>();
  const categoryKey = params.category || '';
  const serviceKey = params.service || '';

  const category = servicePages[categoryKey];
  const service = category?.services[serviceKey];

  if (!category || !service) return <NotFound />;

  const CategoryIcon = category.categoryIcon;
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <CategoryIcon className="w-6 h-6 text-black" />
              </div>
              <div className="text-left">
                <div className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                  {category.categoryTitle} · {category.categorySubtitle}
                </div>
                <div className="text-gray-400 text-sm">Service Details</div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{service.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8">
                <a href="/contact">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <a href={category.backHref}>Back to Services</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <ServiceIcon className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-black">{service.title}</h2>
                      <p className="text-gray-600 text-lg mt-2">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="shadow-xl border border-gray-100 rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">Need help booking?</h3>
                  <p className="text-gray-600 mb-6">
                    Share your requirements and our team will help you with the right option.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl py-6">
                      <a href="/contact">
                        Contact Us
                        <ArrowRightLeft className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full rounded-xl py-6">
                      <a href={category.backHref}>Explore All Services</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceSubPage;
