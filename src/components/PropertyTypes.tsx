import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  Building,
  Castle,
  MapPin,
  Trees,
  Building2,
  Warehouse,
  Mountain
} from "lucide-react";

const propertyTypes = [
  {
    id: 1,
    title: "الفلل الفاخرة",
    description: "فلل عصرية بتصاميم راقية ومرافق متكاملة",
    icon: Home,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "120+",
    startingPrice: "200,000,000",
    currency: "ر.ي",
    features: ["حديقة خاصة", "مسبح", "موقف سيارات", "نظام أمان"]
  },
  {
    id: 2,
    title: "القصور الملكية",
    description: "قصور بمواصفات ملكية للباحثين عن الفخامة المطلقة",
    icon: Castle,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "25+",
    startingPrice: "1,000,000,000",
    currency: "ر.ي",
    features: ["مساحات واسعة", "تصميم كلاسيكي", "مرافق ترفيهية", "خدمات VIP"]
  },
  {
    id: 3,
    title: "العمائر الاستثمارية",
    description: "عمائر تجارية وسكنية بعوائد استثمارية مضمونة",
    icon: Building,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "80+",
    startingPrice: "500,000,000",
    currency: "ر.ي",
    features: ["موقع استراتيجي", "عوائد مضمونة", "إدارة متكاملة", "صيانة شاملة"]
  },
  {
    id: 4,
    title: "الأراضي التجارية",
    description: "أراضي في مواقع استراتيجية للاستثمار التجاري",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "200+",
    startingPrice: "50,000,000",
    currency: "ر.ي",
    features: ["مواقع حيوية", "خدمات متكاملة", "سهولة الوصول", "إمكانيات تطوير"]
  },
  {
    id: 5,
    title: "الشقق السكنية",
    description: "شقق بمواصفات عالية في أرقى الأحياء",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "300+",
    startingPrice: "75,000,000",
    currency: "ر.ي",
    features: ["تشطيب فاخر", "إطلالات مميزة", "أمان 24/7", "مرافق ترفيهية"]
  },
  {
    id: 6,
    title: "المزارع النموذجية",
    description: "مزارع مجهزة بأحدث التقنيات الزراعية",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "45+",
    startingPrice: "300,000,000",
    currency: "ر.ي",
    features: ["أنظمة ري حديثة", "أراضي خصبة", "مصادر مياه", "معدات زراعية"]
  },
  {
    id: 7,
    title: "الأبراج التجارية",
    description: "أبراج حديثة للشركات والمكاتب التجارية",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "15+",
    startingPrice: "2,000,000,000",
    currency: "ر.ي",
    features: ["تقنيات ذكية", "مساحات مرنة", "مواقف متعددة", "خدمات إدارية"]
  },
  {
    id: 8,
    title: "البيوت الشعبية",
    description: "بيوت تراثية بطراز معماري يمني أصيل",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: "150+",
    startingPrice: "100,000,000",
    currency: "ر.ي",
    features: ["طراز تراثي", "مواد طبيعية", "تهوية طبيعية", "أسعار مناسبة"]
  }
];

export function PropertyTypes() {
  return (
    <section id="properties" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-primary bg-primary/10">
            🏠 تنوع العقارات
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            أنواع العقارات المتاحة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نوفر لك مجموعة متنوعة من العقارات الفاخرة والاستثمارية في أفضل المواقع
            <br />
            لنساعدك في العثور على العقار المثالي الذي يلبي احتياجاتك وطموحاتك
          </p>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {propertyTypes.map((property) => (
            <Card key={property.id} className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 bg-background border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {property.count} عقار
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <property.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <property.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-secondary">{property.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {property.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">المميزات الرئيسية:</div>
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 2} المزيد
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">يبدأ من</div>
                    <div className="text-lg font-bold text-primary">
                      {property.startingPrice} {property.currency}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-gold hover:bg-primary-dark">
                  استكشف المزيد
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              لم تجد ما تبحث عنه؟
            </h3>
            <p className="text-muted-foreground mb-6">
              تواصل معنا وسنساعدك في العثور على العقار المثالي وفقاً لمتطلباتك الخاصة
            </p>
            <Button size="lg" className="bg-gradient-gold hover:bg-primary-dark">
              طلب بحث مخصص
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}