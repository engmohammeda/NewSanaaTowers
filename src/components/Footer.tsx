import { Button } from "@/components/ui/button";
import { 
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "العقارات", href: "#properties" },
    { name: "من نحن", href: "#about" },
    { name: "اتصل بنا", href: "#contact" }
  ];

  const propertyTypes = [
    { name: "الفلل الفاخرة", href: "#villas" },
    { name: "القصور الملكية", href: "#palaces" },
    { name: "العمائر الاستثمارية", href: "#buildings" },
    { name: "الأراضي التجارية", href: "#lands" },
    { name: "الشقق السكنية", href: "#apartments" },
    { name: "المزارع النموذجية", href: "#farms" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "إنستاجرام" },
    { icon: Youtube, href: "#", label: "يوتيوب" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-gold p-3 rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  أبراج صنعاء الجديدة
                </h3>
                <p className="text-primary font-medium">للعقارات</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              شركة رائدة في مجال العقارات بخبرة تمتد لأكثر من 15 عاماً، نقدم خدمات متميزة 
              في بيع وشراء العقارات الفاخرة والاستثمارية.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/90">+967 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/90">info@sanaa-estates.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/90">صنعاء الجديدة - شارع الستين</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-bold text-white mb-3">اشترك في النشرة الإخبارية</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-gradient-gold hover:bg-primary-dark">
                  اشترك
                </Button>
              </div>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">أنواع العقارات</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.name}>
                  <a 
                    href={type.href}
                    className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-2 transition-all"></span>
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">خدماتنا</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <span className="text-white/80 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  تقييم عقاري مجاني
                </span>
              </li>
              <li>
                <span className="text-white/80 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  استشارات قانونية
                </span>
              </li>
              <li>
                <span className="text-white/80 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  إدارة الأملاك
                </span>
              </li>
              <li>
                <span className="text-white/80 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  خدمات التسويق
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-bold text-white mb-4">تابعنا على</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 p-3 rounded-lg hover:bg-primary hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-center md:text-right">
              <p>© 2024 أبراج صنعاء الجديدة للعقارات. جميع الحقوق محفوظة.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-white/80 hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#terms" className="text-white/80 hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-white/80 hover:text-primary hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4 ml-1" />
                العودة للأعلى
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button className="bg-gradient-gold hover:bg-primary-dark shadow-luxury rounded-full p-4 animate-pulse">
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
}