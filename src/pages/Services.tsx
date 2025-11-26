import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Brain, Zap, Bot, ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "We develop powerful cross-platform mobile apps using Flutter and React Native tailored to your business needs.",
      features: [
        "iOS and Android apps",
        "Custom UI/UX design",
        "API and backend development",
        "Payment integration",
        "Push notifications",
        "Real-time features",
        "App Store deployment",
        "Ongoing maintenance",
      ],
      color: "from-primary to-primary-light",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "We build fast, modern, and scalable websites, landing pages, dashboards, and eCommerce stores.",
      features: [
        "Custom websites",
        "Business websites",
        "SaaS dashboards",
        "Admin panels",
        "eCommerce platforms",
        "SEO optimization",
        "Responsive design",
        "Performance optimization",
      ],
      color: "from-primary-light to-primary-lighter",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Enhance your digital products with AI tools and smart features that provide real value to users.",
      features: [
        "ChatGPT API integrations",
        "AI-powered chatbots",
        "Smart search functionality",
        "Image and text analysis",
        "AI content generation",
        "Sentiment analysis",
        "Natural language processing",
        "Custom AI models",
      ],
      color: "from-primary to-primary-dark",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Automate your business operations to save time, reduce costs, and scale faster with intelligent workflows.",
      features: [
        "Automated email workflows",
        "Data syncing between apps",
        "CRM and marketing automation",
        "Payment automation",
        "Scheduled tasks",
        "N8n workflows",
        "Zapier integrations",
        "Custom automation solutions",
      ],
      color: "from-primary-light to-primary",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "We create custom AI Agents capable of thinking, planning, and performing complex tasks autonomously.",
      features: [
        "Customer support agents",
        "Sales and lead agents",
        "Research agents",
        "Task automation agents",
        "Data analysis agents",
        "Content creation agents",
        "Multi-agent systems",
        "Agent training and optimization",
      ],
      color: "from-primary-dark to-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              End-to-end digital solutions designed to help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border shadow-medium hover:shadow-strong transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-8">
                    {/* Icon and Title */}
                    <div className="md:col-span-2 p-8 bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                        <service.icon className="text-primary-foreground" size={32} />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link to="/contact">
                        <Button className="gradient-primary text-primary-foreground hover:opacity-90 w-full md:w-auto">
                          Request a Quote <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                    </div>

                    {/* Features List */}
                    <div className="md:col-span-3 p-8">
                      <h3 className="text-lg font-semibold mb-4 text-foreground">What's Included</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-medium">
                Get a Free Consultation <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
