import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Menu,
  X,
  DollarSign
} from "lucide-react";

const currencies = [
  { code: 'YER', symbol: 'ر.ي', name: 'ريال يمني' },
  { code: 'SAR', symbol: 'ر.س', name: 'ريال سعودي' },
  { code: 'USD', symbol: '$', name: 'دولار أمريكي' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const navItems = [
    { name: 'الرئيسية', icon: Home, href: '#home' },
    { name: 'العقارات', icon: Building2, href: '#properties' },
    { name: 'المواقع', icon: MapPin, href: '#locations' },
    { name: 'اتصل بنا', icon: Phone, href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+967 771201197</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>mohammedalbkhyty@gmail.com</span>
            </div>
          </div>
          
          {/* Currency Selector */}
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <select 
              value={selectedCurrency.code}
              onChange={(e) => setSelectedCurrency(currencies.find(c => c.code === e.target.value) || currencies[0])}
              className="bg-transparent border-none text-sm focus:outline-none cursor-pointer"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-gold p-3 rounded-xl shadow-gold">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary leading-tight">
                أبراج صنعاء الجديدة
              </h1>
              <p className="text-sm text-primary font-medium">للعقارات</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-gradient-gold hover:bg-primary-dark shadow-gold">
              احجز استشارة مجانية
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <Button className="mt-4 bg-gradient-gold hover:bg-primary-dark">
                احجز استشارة مجانية
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}