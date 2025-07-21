import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building,
  Globe,
  Star
} from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+967 123 456 789", "+966 50 123 4567"],
      description: "متاح 24/7 للاستفسارات العاجلة"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@sanaa-estates.com", "sales@sanaa-estates.com"],
      description: "نرد خلال ساعة واحدة"
    },
    {
      icon: MapPin,
      title: "موقعنا",
      details: ["صنعاء الجديدة - شارع الستين", "مجمع أبراج الذهب - الطابق 12"],
      description: "زورنا في مكتبنا الرئيسي"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 8:00 - 20:00", "الجمعة: 14:00 - 20:00"],
      description: "خدمة عملاء متميزة"
    }
  ];

  const services = [
    { icon: Building, title: "تقييم عقاري مجاني", description: "احصل على تقييم دقيق لعقارك" },
    { icon: MessageCircle, title: "استشارة قانونية", description: "استشارات قانونية متخصصة" },
    { icon: Globe, title: "خدمات التسويق", description: "تسويق احترافي لعقارك" },
    { icon: Star, title: "إدارة الأملاك", description: "إدارة شاملة لاستثماراتك العقارية" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-primary bg-primary/20 border border-primary/30">
            📞 تواصل معنا
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            نحن هنا لخدمتك
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            فريق خبراء العقارات في انتظارك للإجابة على جميع استفساراتك ومساعدتك في العثور على عقار أحلامك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  احجز استشارة مجانية
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">الاسم الكامل</label>
                      <Input 
                        placeholder="أدخل اسمك الكامل"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">رقم الهاتف</label>
                      <Input 
                        placeholder="+967 123 456 789"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2 font-medium">البريد الإلكتروني</label>
                    <Input 
                      type="email"
                      placeholder="example@email.com"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">نوع العقار المطلوب</label>
                      <select className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white focus:bg-white/20 focus:ring-2 focus:ring-primary">
                        <option value="">اختر نوع العقار</option>
                        <option value="villa">فلل</option>
                        <option value="palace">قصور</option>
                        <option value="building">عمائر</option>
                        <option value="land">أراضي</option>
                        <option value="apartment">شقق</option>
                        <option value="farm">مزارع</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2 font-medium">الميزانية المتوقعة</label>
                      <select className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white focus:bg-white/20 focus:ring-2 focus:ring-primary">
                        <option value="">حدد الميزانية</option>
                        <option value="50-100">50-100 مليون ريال</option>
                        <option value="100-500">100-500 مليون ريال</option>
                        <option value="500-1000">500 مليون - 1 مليار</option>
                        <option value="1000+">أكثر من 1 مليار</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2 font-medium">تفاصيل إضافية</label>
                    <Textarea 
                      placeholder="أخبرنا المزيد عن متطلباتك العقارية..."
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                    />
                  </div>

                  <Button className="w-full bg-gradient-gold hover:bg-primary-dark shadow-gold text-lg py-3">
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/90 mb-1">{detail}</p>
                      ))}
                      <p className="text-white/70 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            خدماتنا المميزة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-gold border-primary/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-white mb-4">
                ⚡ خط الطوارئ العقاري
              </h4>
              <p className="text-white/90 mb-6">
                للاستفسارات العاجلة والصفقات السريعة - متاح 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="w-4 h-4 ml-2" />
                  +967 777 888 999
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب فوري
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}