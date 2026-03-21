import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Target, Eye, Building2, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Learn about Nova Cabs, our journey, and our commitment to excellence
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                Company Profile
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Established with a vision to revolutionize transportation in India, Nova Cabs
                  has grown from a small local cab service to a comprehensive mobility solutions
                  provider. We currently operate across multiple states including Haryana,
                  Gujarat, Andhra Pradesh, and Tamil Nadu.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
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
                      <div className="text-2xl sm:text-3xl font-bold text-black">{stat.number}</div>
                      <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-200 rounded-3xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building2, label: 'Head Office', value: 'Faridabad' },
                      { icon: Users, label: 'Employees', value: '500+' },
                      { icon: Award, label: 'Certified', value: 'ISO 9001' },
                      { icon: TrendingUp, label: 'Growth', value: '200% YoY' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-gray-50 rounded-xl p-5 text-center hover:bg-yellow-50 transition-colors"
                      >
                        <item.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                        <div className="text-gray-500 text-sm">{item.label}</div>
                        <div className="font-semibold text-black">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-400 rounded-2xl p-8 sm:p-10 text-black">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-black/80 leading-relaxed text-lg">
                  To become India's most trusted and innovative mobility solutions provider,
                  transforming the way people travel and transport goods. We envision a future
                  where safe, affordable, and sustainable transportation is accessible to
                  every Indian, connecting communities and driving economic growth.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver exceptional transportation and logistics services that exceed
                  customer expectations through innovation, technology, and dedicated service.
                  We are committed to creating opportunities for drivers and franchise partners
                  while maintaining the highest standards of safety and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Core Values</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                What Drives Us
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Safety First', desc: 'Passenger safety is our top priority' },
                { title: 'Customer Focus', desc: 'We put customers at the center of everything' },
                { title: 'Innovation', desc: 'Embracing technology for better service' },
                { title: 'Integrity', desc: 'Honest and transparent in all dealings' },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
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

export default About;
