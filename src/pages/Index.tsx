import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">HealthyLife</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#consultation" className="text-foreground hover:text-primary transition-colors">
              Консультация
            </a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#consultation">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Здоровое тело начинается с правильного питания
              </h2>
              <p className="text-xl text-muted-foreground">
                Помогу достичь желаемого веса без стресса и голодания. Индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#consultation">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">8+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/a2302ca0-ed3e-4295-9bac-9329b8af479c/files/0f372cf3-0363-4530-9ba1-d586e1cec9fe.jpg"
                alt="Специалист по питанию"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я - сертифицированный специалист по питанию с 8-летним опытом работы. Моя миссия - помочь людям 
              обрести здоровье и уверенность через сбалансированное питание. За годы практики я помогла более 500 
              клиентам достичь их целей по снижению веса без экстремальных диет и ограничений.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Сертифицированный специалист</h3>
                  <p className="text-muted-foreground">Дипломы и сертификаты международного образца</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">Программа питания с учётом ваших особенностей</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="TrendingUp" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Гарантия результата</h3>
                  <p className="text-muted-foreground">Поддержка на всех этапах достижения цели</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к здоровому питанию и снижению веса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/a2302ca0-ed3e-4295-9bac-9329b8af479c/files/7f07acae-41c4-4e1a-bfff-170e7071130e.jpg"
                alt="Индивидуальные программы"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Индивидуальные программы питания</h3>
                <p className="text-muted-foreground">
                  Разработка персонального плана питания с учётом ваших вкусов, образа жизни и целей. 
                  Включает полное меню на месяц и список покупок.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Анализ текущего рациона</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Расчёт калорийности и БЖУ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Готовое меню на 4 недели</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/a2302ca0-ed3e-4295-9bac-9329b8af479c/files/dc791d36-496b-4290-bbd2-2f5c0ff4eb68.jpg"
                alt="Онлайн сопровождение"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Онлайн сопровождение</h3>
                <p className="text-muted-foreground">
                  Постоянная поддержка и корректировка плана питания в процессе работы. 
                  Мотивация и ответы на все вопросы 24/7.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Еженедельные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Корректировка рациона</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Чат-поддержка в мессенджере</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Запись на консультацию</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и я свяжусь с вами в течение 24 часов
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Анна Иванова"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anna@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Расскажите о вашей цели
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Например: хочу похудеть на 10 кг за 3 месяца"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">HealthyLife</h3>
              <p className="text-white/70">
                Ваш путь к здоровью и идеальному весу
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@healthylife.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>© 2024 HealthyLife. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
