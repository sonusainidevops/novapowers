import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Briefcase,
  Clock,
  IndianRupee,
  Users,
  GraduationCap,
  Award,
  ChevronRight,
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Cab Driver',
    location: 'Multiple Cities',
    type: 'Full-time',
    salary: '₹20,000 - ₹35,000/month',
    experience: '0-2 years',
    category: 'Driving',
  },
  {
    id: 2,
    title: 'Delivery Executive',
    location: 'Pan India',
    type: 'Full-time / Part-time',
    salary: '₹15,000 - ₹25,000/month',
    experience: '0-1 years',
    category: 'Delivery',
  },
  {
    id: 3,
    title: 'Branch Manager',
    location: 'Faridabad, Ahmedabad',
    type: 'Full-time',
    salary: '₹40,000 - ₹60,000/month',
    experience: '3-5 years',
    category: 'Management',
  },
  {
    id: 4,
    title: 'Customer Support Executive',
    location: 'Remote / Office',
    type: 'Full-time',
    salary: '₹18,000 - ₹28,000/month',
    experience: '0-2 years',
    category: 'Support',
  },
  {
    id: 5,
    title: 'Marketing Executive',
    location: 'Faridabad, Delhi',
    type: 'Full-time',
    salary: '₹25,000 - ₹40,000/month',
    experience: '1-3 years',
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'Operations Manager',
    location: 'Chennai, Surat',
    type: 'Full-time',
    salary: '₹35,000 - ₹55,000/month',
    experience: '2-4 years',
    category: 'Operations',
  },
];

const benefits = [
  {
    icon: IndianRupee,
    title: 'Competitive Salary',
    desc: 'Industry-leading pay with performance bonuses',
  },
  {
    icon: Award,
    title: 'Growth Opportunities',
    desc: 'Clear career progression paths',
  },
  {
    icon: Users,
    title: 'Great Culture',
    desc: 'Collaborative and inclusive environment',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    desc: 'Continuous learning programs',
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Careers</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Join India's fastest-growing transportation company
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                Benefits & Perks
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-slate-100 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Openings</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                Current Openings
              </h2>
            </div>
            <div className="grid gap-4">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="group hover:shadow-lg transition-shadow border-slate-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-slate-900">{job.title}</h4>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {job.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <IndianRupee className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white rounded-full"
                      >
                        <a href="/contact">
                          Apply Now
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Driver CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 sm:p-16 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Become a Nova Driver Partner
                  </h2>
                  <p className="text-lg text-white/80 mb-6">
                    Join our fleet of 1000+ drivers. Enjoy flexible hours, weekly payments, and attractive incentives.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Flexible working hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Weekly payment settlements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Higher earnings with incentives</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-slate-100 rounded-full px-8"
                  >
                    <a href="/contact">Register as Driver</a>
                  </Button>
                </div>
                <div className="bg-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Driver Testimonials</h3>
                  <blockquote className="text-white/90 italic">
                    "Joining Nova Cabs was the best decision. I earn more than my previous job and have the flexibility to spend time with my family."
                  </blockquote>
                  <p className="text-white/60 mt-4">— Rajesh Kumar, Driver Partner since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
