import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Building2, MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const branchOffices = [
  {
    city: 'Faridabad',
    state: 'Haryana',
    type: 'Head Office',
    address: 'Nova Towers, Sector 15',
    phone: '+91-129-XXXXXXX',
    featured: true,
  },
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '45 Business Park, SG Highway',
    phone: '+91-79-XXXXXXX',
    featured: false,
  },
  {
    city: 'Surat',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '78 Ring Road, Adajan',
    phone: '+91-261-XXXXXXX',
    featured: false,
  },
  {
    city: 'Gandhinagar',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '25 Sector 11, Infocity',
    phone: '+91-79-XXXXXXX',
    featured: false,
  },
  {
    city: 'Rayachoti',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '12 Kadapa Road',
    phone: '+91-8561-XXXXXX',
    featured: false,
  },
  {
    city: 'Tirumala',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '56 Temple Road',
    phone: '+91-877-XXXXXXX',
    featured: false,
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Branch Office',
    address: '34 Anna Salai, T Nagar',
    phone: '+91-44-XXXXXXX',
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
  const headOffice = branchOffices.find((b) => b.featured);
  const otherOffices = branchOffices.filter((b) => !b.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Branches</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Strategically located offices across India to serve you better
            </p>
          </div>
        </section>

        {/* Head Office */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {headOffice && (
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-6 h-6 text-yellow-300" />
                      <span className="text-yellow-300 font-bold text-lg">Head Office & Corporate Office</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                      {headOffice.city}, {headOffice.state}
                    </h2>
                    <p className="text-white/80 text-lg mb-4">Corporate Headquarters</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {headOffice.address}
                      </span>
                      <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
                        <Phone className="w-4 h-4" />
                        {headOffice.phone}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <a href="/contact">Contact Head Office</a>
                  </Button>
                </div>
              </div>
            )}

            {/* Branch Grid */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Branch Offices</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Our regional offices provide localized support and services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {otherOffices.map((office) => (
                <div
                  key={`${office.city}-${office.state}`}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{office.city}</h4>
                      <p className="text-sm text-slate-500">{office.state}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{office.address}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </div>
                </div>
              ))}
            </div>

            {/* Franchise Network */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Franchise Network</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Our expanding franchise network across multiple regions
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {franchiseLocations.map((loc) => (
                  <div key={loc.region} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{loc.count}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{loc.region}</h4>
                    <p className="text-slate-500 text-sm">{loc.cities.join(', ')}</p>
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
