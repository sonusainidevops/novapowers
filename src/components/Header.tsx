import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Phone, ChevronDown, Car, Package, Bike, Megaphone } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Cab Service (Taxi)',
    href: '/services#cab',
    icon: Car,
    items: [
      { title: 'Local', href: '/services#cab' },
      { title: 'Outstation', href: '/services#cab' },
      { title: 'Airport', href: '/services#cab' },
      { title: 'Corporate', href: '/services#cab' },
      { title: 'Oneway', href: '/services#cab' },
      { title: 'Package', href: '/services#cab' },
    ],
  },
  {
    title: 'Delivery Service',
    href: '/services#delivery',
    icon: Package,
    items: [
      { title: 'Nova Store', href: '/services#delivery' },
      { title: 'Delivery Partner', href: '/services#delivery' },
      { title: 'Store Vendor', href: '/services#delivery' },
    ],
  },
  {
    title: 'Rental Service',
    href: '/services#rental',
    icon: Bike,
    items: [
      { title: 'Car Rental', href: '/services#rental' },
      { title: 'Bike Rental', href: '/services#rental' },
    ],
  },
  {
    title: 'Advertisement Service',
    href: '/services#advertisement',
    icon: Megaphone,
    items: [
      { title: 'Advertisement of Local Business', href: '/services#advertisement' },
      { title: 'Nova Channel Partner in Screen for Taxi, Shop, Salon, Material Shop etc', href: '/services#advertisement' },
    ],
  },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Vision', href: '/about#vision' },
  { label: 'Mission', href: '/about#mission' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Franchise Model', href: '/franchise' },
  { label: 'Branches', href: '/branches' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-black rounded-lg px-4 py-2">
              <span className="text-white font-bold text-xl tracking-tight">NOVA</span>
              <span className="text-yellow-400 text-sm ml-1">POWERS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about#vision"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Vision
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about#mission"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Mission
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 bg-transparent hover:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 bg-white rounded-xl shadow-xl border border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="p-3 rounded-lg hover:bg-gray-50">
                          <a href={category.href} className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                              <category.icon className="w-4 h-4 text-black" />
                            </div>
                            <span className="font-semibold text-black text-sm">{category.title}</span>
                          </a>
                          <ul className="ml-10 space-y-1">
                            {category.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-yellow-500 transition-colors"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/franchise"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Franchise Model
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/branches"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Branches
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/gallery"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/career"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Career
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="px-4 py-2 text-sm font-medium text-black hover:text-yellow-500 transition-colors"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-medium text-black"
            >
              <Phone className="w-4 h-4" />
              <span>+91-123-456-7890</span>
            </a>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6"
            >
              <a href="/contact">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] p-0 bg-white overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="bg-black rounded-lg px-4 py-2">
                    <span className="text-white font-bold text-xl">NOVA</span>
                    <span className="text-yellow-400 text-sm ml-1">POWERS</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5 text-black" />
                  </Button>
                </div>
                <nav className="flex flex-col p-6 gap-1">
                  <a
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/about#vision"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Vision
                  </a>
                  <a
                    href="/about#mission"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Mission
                  </a>
                  
                  {/* Mobile Services Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 space-y-1">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="border-l-2 border-yellow-400 pl-4">
                            <a
                              href={category.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-sm font-semibold text-black hover:text-yellow-600"
                            >
                              {category.title}
                            </a>
                            {category.items.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-1 text-sm text-gray-600 hover:text-yellow-600"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="/franchise"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Franchise Model
                  </a>
                  <a
                    href="/branches"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Branches
                  </a>
                  <a
                    href="/gallery"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Gallery
                  </a>
                  <a
                    href="/career"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Career
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-black hover:bg-yellow-50 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Contact
                  </a>
                </nav>
                <div className="mt-auto p-6 border-t border-gray-100">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-black mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91-123-456-7890</span>
                  </a>
                  <Button
                    asChild
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full"
                  >
                    <a href="/contact">Book Now</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
