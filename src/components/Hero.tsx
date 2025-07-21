import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Award,
  Users,
  Building,
  Search,
  MapPin,
  DollarSign
} from "lucide-react";

export function Hero() {
  const stats = [
    { icon: Building, number: "500+", text: "عقار متاح" },
    { icon: Users, number: "1000+", text: "عميل راضي" },
    { icon: Award, number: "15+", text: "سنة خبرة" },
    { icon: Star, number: "4.9", text: "تقييم العملاء" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-primary bg-primary/10 border border-primary/20">
            🏆 الشركة الرائدة في مجال العقارات
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            أبراج صنعاء الجديدة
            <span className="block text-primary text-3xl md:text-5xl lg:text-6xl mt-2">
              للعقارات
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            نحن نساعدك في العثور على العقار المثالي - من الفلل الفاخرة إلى الأراضي الاستثمارية
            <br />
            <span className="text-primary font-medium">خبرة تمتد لأكثر من 15 عاماً في السوق العقاري</span>
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-10 shadow-luxury max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <select className="w-full pr-10 pl-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>اختر المنطقة</option>
                  <option>صنعاء الجديدة</option>
                  <option>الحدة</option>
                  <option>شميلة</option>
                  <option>صعفان</option>
                </select>
              </div>

              <div className="relative">
                <Building className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <select className="w-full pr-10 pl-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>نوع العقار</option>
                  <option>فلل</option>
                  <option>قصور</option>
                  <option>عمائر</option>
                  <option>أراضي</option>
                  <option>شقق</option>
                  <option>مزارع</option>
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <select className="w-full pr-10 pl-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>النطاق السعري</option>
                  <option>أقل من 100 مليون</option>
                  <option>100-500 مليون</option>
                  <option>500 مليون - 1 مليار</option>
                  <option>أكثر من 1 مليار</option>
                </select>
              </div>

              <Button className="bg-gradient-gold hover:bg-primary-dark shadow-gold h-12">
                <Search className="w-5 h-5 ml-2" />
                ابحث الآن
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-gold hover:bg-primary-dark shadow-gold px-8 py-4 text-lg">
              تصفح العقارات المتاحة
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg">
              اطلب تقييم عقاري مجاني
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}