import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Briefcase,
  Clock,
  IndianRupee,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Share2,
  Building,
} from 'lucide-react';
import { getJobById } from '@/data/jobs';

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const job = jobId ? getJobById(jobId) : undefined;

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-6">The job you are looking for does not exist.</p>
            <Button onClick={() => navigate('/career')} className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at Nova Powers`,
        text: `Check out this job opportunity: ${job.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('/career')}
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Careers
            </button>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-yellow-400 text-black">{job.category}</Badge>
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    {job.type}
                  </Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
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
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  onClick={() => navigate(`/apply/${job.id}`)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">About the Role</h2>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Key Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {job.benefits.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-black mb-4">Job Overview</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Job Type</p>
                          <p className="font-medium text-black">{job.type}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-black">{job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <IndianRupee className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Salary</p>
                          <p className="font-medium text-black">{job.salary}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-medium text-black">{job.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Posted On</p>
                          <p className="font-medium text-black">{job.postedDate}</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => navigate(`/apply/${job.id}`)}
                      className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                    >
                      Apply for this Position
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
