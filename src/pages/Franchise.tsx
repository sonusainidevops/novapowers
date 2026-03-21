import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Car,
  Zap,
  Shield,
  Headphones,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const franchiseTypes = [
  {
    icon: Car,
    title: 'Cab Franchise',
    description: 'Join our growing network of cab services and earn steady income.',
    benefits: [
      'Low investment, high returns',
      'Complete operational support',
      'Driver recruitment assistance',
      'Technology platform access',
      'Marketing & branding support',
    ],
    investment: '₹5L - ₹15L',
    roi: '18-24 months',
    vehicles: 'Cars & SUVs',
  },
  {
    icon: Zap,
    title: 'E-Scooter Franchise',
    description: 'Be part of the electric mobility revolution with our E-Scooter franchise.',
    benefits: [
      'Eco-friendly business model',
      'Government subsidies available',
      'Low maintenance costs',
      'Growing market demand',
      'Tech-enabled operations',
    ],
    investment: '₹3L - ₹8L',
    roi: '12-18 months',
    vehicles: 'E-Scooters',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Trusted Brand',
    desc: 'Established name in transportation industry',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for all franchisees',
  },
  {
    icon: DollarSign,
    title: 'High ROI',
    desc: 'Attractive returns on your investment',
  },
  {
    icon: Users,
    title: 'Growing Network',
    desc: 'Join 50+ successful franchise partners',
  },
];

const Franchise = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Franchise Model
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Partner with Nova Cabs and build your own successful business
            </p>
          </div>
        </section>

        {/* Franchise Types */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Business Opportunity</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                Choose Your Franchise
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {franchiseTypes.map((franchise) => (
                <Card key={franchise.title} className="border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-black p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                        <franchise.icon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{franchise.title}</h3>
                        <p className="text-gray-400 text-sm">{franchise.vehicles}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6">{franchise.description}</p>
                    <ul className="space-y-3 mb-8">
                      {franchise.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-gray-500 text-sm mb-1">Investment</div>
                        <div className="font-bold text-black">{franchise.investment}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-gray-500 text-sm mb-1">ROI Period</div>
                        <div className="font-bold text-black">{franchise.roi}</div>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl py-6 text-lg">
                      <a href="/contact">
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Benefits</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                Why Partner With Us?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:border-yellow-200 transition-all">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                How to Get Started
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Apply', desc: 'Fill out the franchise application form' },
                { step: '2', title: 'Review', desc: 'Our team reviews your application' },
                { step: '3', title: 'Agreement', desc: 'Sign the franchise agreement' },
                { step: '4', title: 'Training', desc: 'Complete training and onboarding' },
                { step: '5', title: 'Launch', desc: 'Start your franchise operation' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-black text-2xl font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Franchise;
