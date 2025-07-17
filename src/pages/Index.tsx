import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Современная гостиная",
      description: "3D-визуализация просторной гостиной в минималистичном стиле",
      image: "/img/431ab057-67fe-4048-b367-8bfd94b619c6.jpg",
      category: "Жилая комната"
    },
    {
      id: 2,
      title: "Элегантная кухня",
      description: "Визуализация кухни с мраморными столешницами и современной техникой",
      image: "/img/fcee2816-15ab-467e-b5f8-82522d9aba52.jpg",
      category: "Кухня"
    },
    {
      id: 3,
      title: "Уютная спальня",
      description: "Дизайн спальни в нейтральных тонах с природными текстурами",
      image: "/img/2727ba2b-1996-46bb-ba18-2580aa66b4a1.jpg",
      category: "Спальня"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-designer-light z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-designer-dark">Interior Designer</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-designer-gray hover:text-designer-dark transition-colors">Главная</a>
              <a href="#portfolio" className="text-designer-gray hover:text-designer-dark transition-colors">Портфолио</a>
              <a href="#contact" className="text-designer-gray hover:text-designer-dark transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-6 text-designer-gray border-designer-gray">
              3D-Визуализация интерьеров
            </Badge>
            <h1 className="text-5xl md:text-7xl font-semibold text-designer-dark mb-6 leading-tight">
              Превращаю идеи<br />
              <span className="text-designer-gray">в реальность</span>
            </h1>
            <p className="text-xl text-designer-gray max-w-2xl mx-auto mb-12 leading-relaxed">
              Профессиональная 3D-визуализация интерьеров и планировок. 
              Создаю фотореалистичные изображения вашего будущего дома.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-designer-dark hover:bg-designer-gray text-white px-8 py-3">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button variant="outline" size="lg" className="border-designer-gray text-designer-gray hover:bg-designer-light px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-semibold text-designer-dark mb-2">150+</div>
              <div className="text-designer-gray">Проектов выполнено</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-semibold text-designer-dark mb-2">5+</div>
              <div className="text-designer-gray">Лет опыта</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-semibold text-designer-dark mb-2">24ч</div>
              <div className="text-designer-gray">Среднее время визуализации</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-designer-light/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-designer-gray border-designer-gray">
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-semibold text-designer-dark mb-6">
              Мои работы
            </h2>
            <p className="text-xl text-designer-gray max-w-2xl mx-auto">
              Каждый проект — это уникальная история, воплощенная в 3D-визуализации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-designer-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-designer-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-designer-gray text-designer-gray hover:bg-designer-light">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Посмотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-designer-gray border-designer-gray">
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-semibold text-designer-dark mb-6">
              Что я делаю
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-designer-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-designer-gray group-hover:text-white transition-colors">
                <Icon name="Cube" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-designer-dark mb-4">3D-Визуализация</h3>
              <p className="text-designer-gray leading-relaxed">
                Создание фотореалистичных изображений интерьеров с учетом освещения, материалов и текстур
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-designer-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-designer-gray group-hover:text-white transition-colors">
                <Icon name="Layout" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-designer-dark mb-4">Планировки</h3>
              <p className="text-designer-gray leading-relaxed">
                Разработка оптимальных планировочных решений для квартир и домов
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-designer-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-designer-gray group-hover:text-white transition-colors">
                <Icon name="Palette" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-designer-dark mb-4">Дизайн-концепция</h3>
              <p className="text-designer-gray leading-relaxed">
                Создание концепции дизайна с подбором материалов, цветов и мебели
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-designer-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-white/20 text-white/80">
            Контакты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Готовы обсудить проект?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Свяжитесь со мной, чтобы обсудить детали вашего проекта. 
            Отвечу в течение 24 часов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <div className="text-sm text-white/60 mb-1">Email</div>
              <div className="text-white">designer@example.com</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <div className="text-sm text-white/60 mb-1">Телефон</div>
              <div className="text-white">+7 (999) 123-45-67</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <div className="text-sm text-white/60 mb-1">Telegram</div>
              <div className="text-white">@designer_3d</div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-designer-dark hover:bg-white/90 px-8 py-3">
            <Icon name="Send" size={20} className="mr-2" />
            Написать сообщение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-designer-light">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-designer-dark font-semibold mb-4 md:mb-0">
              Interior Designer
            </div>
            <div className="text-designer-gray text-sm">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;