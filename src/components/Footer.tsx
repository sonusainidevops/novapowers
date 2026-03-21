import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Cab Service', href: '/services' },
    { label: 'Delivery Service', href: '/services' },
    { label: 'Rental Service', href: '/services' },
    { label: 'Advertisement', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/career' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg px-4 py-2 inline-block mb-6">
              <span className="text-black font-bold text-xl tracking-tight">NOVA</span>
              <span className="text-yellow-500 text-sm ml-1">CABS</span>
            </div>
            <p className="text-gray-400 mb-6">
              India's leading transportation and logistics solutions provider. Safe, reliable, and affordable services across the nation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Nova Towers, Sector 15, Faridabad</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>+91-123-456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>info@novacabs.com</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download & Social */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Download Our App</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.87-2.54 6.05.22 7.13-.57 1.5-1.31 2.99-2.27 4.08zm-5.85-15.1c.07-1.1 1.02-2.05 2.1-2.11.27 2.01-1.67 4.24-2.1 2.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors hover:text-black"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Nova Cabs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
