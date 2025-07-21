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
                <span className="text-white/90">+967 771201197</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/90">mohammedalbkhyty@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/90">اليمن - صنعاء - سعوان - شارع النصر</span>
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
              <p className="text-sm mt-1">البرمجة والتسويق: محمد البخيتي</p>
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

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a 
          href="tel:+967771201197"
          className="bg-gradient-gold hover:bg-primary-dark shadow-luxury rounded-full p-4 animate-pulse transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
        <a 
          href="https://wa.me/967771201197"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 shadow-luxury rounded-full p-4 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        <a 
          href="https://wa.me/967772791169"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 shadow-luxury rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <span className="text-xs text-white font-bold">MB</span>
        </a>
      </div>
    </footer>
  );
}