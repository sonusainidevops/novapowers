import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Car,
  Zap,
  TrendingUp,
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

export function Franchise() {
  return (
    <section id="franchise" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Business Opportunity</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Franchise Model
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Partner with Nova Cabs and build your own successful business with our proven franchise model
          </p>
        </div>

        {/* Franchise Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {franchiseTypes.map((franchise) => (
            <Card
              key={franchise.title}
              className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="bg-gradient-to-br from-primary to-primary/90 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <franchise.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{franchise.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6">{franchise.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {franchise.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-slate-500 text-sm mb-1">Investment</div>
                    <div className="font-bold text-slate-900">{franchise.investment}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-slate-500 text-sm mb-1">ROI Period</div>
                    <div className="font-bold text-slate-900">{franchise.roi}</div>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6 text-lg font-semibold group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            Why Partner With Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
