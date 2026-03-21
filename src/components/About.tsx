import { Target, Eye, Building2, Users, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Who We Are
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Nova Cabs is India's leading transportation and logistics service provider, 
            committed to delivering excellence in every journey.
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Company Profile
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established with a vision to revolutionize transportation in India, Nova Cabs 
                has grown from a small local cab service to a comprehensive mobility solutions 
                provider. We currently operate across multiple states including Haryana, 
                Gujarat, Andhra Pradesh, and Tamil Nadu.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our diverse portfolio includes cab services, delivery solutions, vehicle rentals, 
                and advertisement services. With a fleet of modern vehicles and a team of 
                dedicated professionals, we ensure safe, comfortable, and reliable services 
                for individuals and businesses alike.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '5+', label: 'Years Experience' },
                  { number: '1000+', label: 'Fleet Size' },
                  { number: '8+', label: 'Branch Offices' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building2, label: 'Head Office', value: 'Faridabad' },
                      { icon: Users, label: 'Employees', value: '500+' },
                      { icon: Award, label: 'Certified', value: 'ISO 9001' },
                      { icon: TrendingUp, label: 'Growth', value: '200% YoY' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition-colors"
                      >
                        <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-slate-500 text-sm">{item.label}</div>
                        <div className="font-semibold text-slate-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To become India's most trusted and innovative mobility solutions provider, 
                transforming the way people travel and transport goods. We envision a future 
                where safe, affordable, and sustainable transportation is accessible to 
                every Indian, connecting communities and driving economic growth.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To deliver exceptional transportation and logistics services that exceed 
                customer expectations through innovation, technology, and dedicated service. 
                We are committed to creating opportunities for drivers and franchise partners 
                while maintaining the highest standards of safety and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
