import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Award,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Target,
  Users
} from "lucide-react";

export function OwnerSection() {
  const achievements = [
    { icon: Award, title: "15+ سنة خبرة", description: "في السوق العقاري اليمني" },
    { icon: Users, title: "1000+ عميل راضي", description: "حققوا أحلامهم العقارية معنا" },
    { icon: Target, title: "500+ صفقة ناجحة", description: "بقيم تزيد عن 50 مليار ريال" },
    { icon: CheckCircle, title: "ضمان الجودة", description: "التزام بأعلى معايير الخدمة" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Owner Image & Info */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              {/* تم تعديل مسار الصورة هنا */}
              <img 
                src={import.meta.env.BASE_URL + "assets/images/owner-profile.png"}
                alt="مالك شركة أبراج صنعاء الجديدة للعقارات"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-gold p-2 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-secondary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">تقييم العملاء</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">سنة خبرة</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-primary bg-primary/10">
              👨‍💼 قيادة احترافية
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              مؤسس الشركة
              <span className="block text-primary">ورائد العقارات</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              بخبرة تمتد لأكثر من 15 عاماً في السوق العقاري اليمني، نفخر بقيادة فريق محترف 
              يضم أفضل الخبراء في مجال العقارات. رؤيتنا هي أن نكون الشريك الأول والأوثق 
              لكل من يبحث عن عقار أحلامه في اليمن.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">خبرة معمقة في السوق العقاري اليمني</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">شبكة واسعة من الشراكات العقارية</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">التزام بأعلى معايير الشفافية والمصداقية</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">خدمة عملاء متميزة على مدار الساعة</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-gold hover:bg-primary-dark shadow-gold">
                <Phone className="w-4 h-4 ml-2" />
                تواصل مباشر
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
                استشارة مجانية
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-accent rounded-xl p-6">
              <h4 className="font-bold text-secondary mb-4">للتواصل المباشر:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">+967 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground">owner@sanaa-estates.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            إنجازاتنا وتميزنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
