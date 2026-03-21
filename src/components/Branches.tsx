import { Building2, MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const branchOffices = [
  {
    city: 'Faridabad',
    state: 'Haryana',
    type: 'Head Office',
    address: '123 Nova Towers, Sector 15',
    phone: '+91-129-XXXXXXX',
    color: 'bg-blue-500',
    featured: true,
  },
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '45 Business Park, SG Highway',
    phone: '+91-79-XXXXXXX',
    color: 'bg-blue-500',
    featured: false,
  },
  {
    city: 'Surat',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '78 Ring Road, Adajan',
    phone: '+91-261-XXXXXXX',
    color: 'bg-blue-500',
    featured: false,
  },
  {
    city: 'Gandhinagar',
    state: 'Gujarat',
    type: 'Branch Office',
    address: '25 Sector 11, Infocity',
    phone: '+91-79-XXXXXXX',
    color: 'bg-blue-500',
    featured: false,
  },
  {
    city: 'Rayachoti',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '12 Kadapa Road',
    phone: '+91-8561-XXXXXX',
    color: 'bg-orange-500',
    featured: false,
  },
  {
    city: 'Tirumala',
    state: 'Andhra Pradesh',
    type: 'Branch Office',
    address: '56 Temple Road',
    phone: '+91-877-XXXXXXX',
    color: 'bg-orange-500',
    featured: false,
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Branch Office',
    address: '34 Anna Salai, T Nagar',
    phone: '+91-44-XXXXXXX',
    color: 'bg-green-500',
    featured: false,
  },
];

const franchiseLocations = [
  { region: 'Delhi NCR', count: '15+', color: 'bg-green-500' },
  { region: 'Gujarat', count: '8+', color: 'bg-blue-500' },
  { region: 'Andhra Pradesh', count: '5+', color: 'bg-orange-500' },
  { region: 'Tamil Nadu', count: '4+', color: 'bg-purple-500' },
];

export function Branches() {
  const headOffice = branchOffices.find((b) => b.featured);
  const otherOffices = branchOffices.filter((b) => !b.featured);

  return (
    <section id="branches" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Presence</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Branch Offices
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Strategically located offices across India to serve you better
          </p>
        </div>

        {/* Head Office Featured */}
        {headOffice && (
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 sm:p-12 mb-12 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-300" />
                  <span className="text-yellow-300 font-bold text-lg">Head Office & Corporate Office</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                  {headOffice.city}, {headOffice.state}
                </h3>
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
                variant="secondary"
                className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Contact Head Office
              </Button>
            </div>
          </div>
        )}

        {/* Branch Grid */}
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

        {/* Franchise Offices */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Our Franchise Network
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {franchiseLocations.map((loc) => (
              <span
                key={loc.region}
                className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm"
              >
                <span className={`w-2 h-2 ${loc.color} rounded-full`} />
                <span className="font-medium text-slate-700">
                  {loc.region} - {loc.count} Locations
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
