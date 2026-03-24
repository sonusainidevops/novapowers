import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Building2, MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSeo } from '@/hooks/use-seo';

const branchOffices = [
  {
    city: 'Faridabad',
    state: 'Haryana',
    type: 'Head Office',
    address: "Nova’sPowers Ltd, Mannat Arcade, 2nd Floor, 12/2 Old Sher Shah Suri Road, Sector 36, Near Mother Son Company",
    phone: '+91 86009 39398',
    featured: true,
  },
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '45 Business Park, SG Highway',
    phone: '+91 86009 39398',
    featured: false,
  },
  {
    city: 'Surat',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '78 Ring Road, Adajan',
    phone: '+91 86009 39398',
    featured: false,
  },
  {
    city: 'Gandhinagar',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '25 Sector 11, Infocity',
    phone: '+91 86009 39398',
    featured: false,
  },
  {
    city: 'Rayachoti',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '12 Kadapa Road',
    phone: '+91 86009 39398',
    featured: false,
  },
  {
    city: 'Tirumala',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '56 Temple Road',
    phone: '+91 86009 39398',
    featured: false,
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Branch Office',
    address: '34 Anna Salai, T Nagar',
    phone: '+91 86009 39398',
    featured: false,
  },
];

const franchiseLocations = [
  { region: 'Delhi NCR', count: '15+', cities: ['Faridabad', 'Ghaziabad', 'Noida', 'Gurgaon'] },
  { region: 'Gujarat', count: '8+', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'] },
  { region: 'Andhra Pradesh', count: '5+', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur'] },
  { region: 'Tamil Nadu', count: '4+', cities: ['Chennai', 'Coimbatore', 'Madurai'] },
];

const Branches = () => {
  useSeo({
    title: 'Nova Powers | Branches',
    description: 'Nova Powers taxi company branch offices across India including Faridabad.',
    keywords: 'Nova Powers branches, offices, Faridabad, India',
    image: '/hero.png',
  });
  const headOffice = branchOffices.find((b) => b.featured);
  const otherOffices = branchOffices.filter((b) => !b.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Branches</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Strategically located offices across India to serve you better
            </p>
          </div>
        </section>

        {/* Head Office */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {headOffice && (
              <div className="bg-black rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <span className="text-yellow-400 font-bold text-lg">Head Office & Corporate Office</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                      {headOffice.city}, {headOffice.state}
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">Corporate Headquarters</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {headOffice.address}
                      </span>
                      <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                        <Phone className="w-4 h-4" />
                        {headOffice.phone}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8 py-6 text-lg"
                  >
                    <a href="/contact">Contact Head Office</a>
                  </Button>
                </div>
              </div>
            )}

            {/* Branch Grid */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Branch Offices</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Our regional offices provide localized support and services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {otherOffices.map((office) => (
                <div
                  key={`${office.city}-${office.state}`}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-yellow-200 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{office.city}</h4>
                      <p className="text-sm text-gray-500">{office.state}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{office.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </div>
                </div>
              ))}
            </div>

            {/* Franchise Network */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Franchise Network</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Our expanding franchise network across multiple regions
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {franchiseLocations.map((loc) => (
                  <div key={loc.region} className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-black">{loc.count}</span>
                    </div>
                    <h4 className="font-bold text-black mb-2">{loc.region}</h4>
                    <p className="text-gray-500 text-sm">{loc.cities.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Branches;
