import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 86009 39398',
    subContent: 'Toll Free: 1800-XXX-XXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@novapowers.com',
    subContent: 'support@novapowers.com',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    content: 'Nova Towers, Sector 15',
    subContent: 'Faridabad, Haryana, India',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 9:00 PM',
    subContent: 'Sunday: 10:00 AM - 6:00 PM',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const enquiryTypes = [
  'Cab Booking',
  'Delivery Service',
  'Rental inquiry',
  'Franchise Opportunity',
  'Career',
  'Partnership',
  'Complaint',
  'General Inquiry',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', enquiryType: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Have questions? We would love to hear from you
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12 border-gray-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-12 border-gray-200"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91-XXXXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-12 border-gray-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="enquiryType">Enquiry Type *</Label>
                          <Select
                            value={formData.enquiryType}
                            onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                          >
                            <SelectTrigger className="h-12 border-gray-200">
                              <SelectValue placeholder="Select enquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {enquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="border-gray-200"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl h-12 text-lg"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">{info.title}</h4>
                        <p className="text-gray-700">{info.content}</p>
                        <p className="text-gray-500 text-sm">{info.subContent}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-0 shadow-md bg-yellow-400">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-8 h-8 mx-auto mb-3 text-black" />
                      <h4 className="font-bold mb-1 text-black">WhatsApp</h4>
                      <p className="text-black/70 text-sm">+91-9XX-XXX-XXXX</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-md bg-black text-white">
                    <CardContent className="p-6 text-center">
                      <Headphones className="w-8 h-8 mx-auto mb-3" />
                      <h4 className="font-bold mb-1">Live Chat</h4>
                      <p className="text-gray-400 text-sm">Available 24/7</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all text-gray-600"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
