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
  ArrowRight,
} from 'lucide-react';
import { jobs } from '@/data/jobs';

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
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Careers</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Join India's fastest-growing transportation company
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                Benefits & Perks
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-yellow-50 transition-colors border border-gray-100"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Openings</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
                Current Openings
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Explore our open positions and find the perfect role for you. Click on any job to view details and apply.
              </p>
            </div>
            <div className="grid gap-4">
              {jobs.map((job) => (
                <Card key={job.id} className="group hover:shadow-lg transition-all border-0 shadow-sm bg-white cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                            {job.title}
                          </h4>
                          <Badge variant="secondary" className="bg-yellow-100 text-black">
                            {job.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                        <p className="text-gray-600 mt-3 line-clamp-2">{job.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="border-2 border-gray-200 text-black hover:border-yellow-400 hover:text-yellow-600 rounded-full"
                        >
                          <a href={`/career/${job.id}`}>
                            View Details
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full"
                        >
                          <a href={`/apply/${job.id}`}>
                            Apply Now
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Driver CTA */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black rounded-3xl p-8 sm:p-16 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Become a Nova Driver Partner
                  </h2>
                  <p className="text-lg text-gray-400 mb-6">
                    Join our fleet of 1000+ drivers. Enjoy flexible hours, weekly payments, and attractive incentives.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Flexible working hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Weekly payment settlements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Higher earnings with incentives</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
                  >
                    <a href="/apply/cab-driver">
                      Register as Driver
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="bg-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Driver Testimonials</h3>
                  <blockquote className="text-gray-300 italic">
                    "Joining Nova Powers was the best decision. I earn more than my previous job and have the flexibility to spend time with my family."
                  </blockquote>
                  <p className="text-gray-500 mt-4">— Rajesh Kumar, Driver Partner since 2022</p>
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
