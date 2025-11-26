import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Globe, Brain, Zap, Bot, CheckCircle, Code, Rocket, Shield } from "lucide-react";
import Header from "@/components/Home/Header";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android apps built with Flutter and React Native for seamless user experiences.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Fast, scalable websites and web applications using modern frameworks like React and Next.js.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Enhance your products with ChatGPT API, smart search, and AI-powered features.",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Automate business operations with N8n, Zapier, and custom workflows to save time and reduce costs.",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Custom AI agents that think, plan, and perform tasks for customer support, sales, and research.",
    },
  ];

  const features = [
    { icon: Code, text: "Expert Mobile & Web Developers" },
    { icon: Brain, text: "Advanced AI Integration Specialists" },
    { icon: Zap, text: "Automation Experts (N8n, Zapier, Make)" },
    { icon: Shield, text: "On-time Delivery & 24/7 Support" },
    { icon: Globe, text: "Global Client Base" },
    { icon: Rocket, text: "Fast & Secure Development" },
  ];

  const technologies = [
    "Flutter", "React Native", "React", "Next.js", "Node.js", "Python",
    "Firebase", "AWS", "PostgreSQL", "GPT-4", "N8n", "Zapier"
  ];

  const testimonials = [
    {
      quote: "CodeMuse transformed our vision into a stunning mobile app. Their expertise in AI integration gave us a competitive edge.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      country: "USA",
    },
    {
      quote: "Professional, responsive, and delivered ahead of schedule. The automation workflows saved us 20 hours per week.",
      author: "Michael Chen",
      role: "Founder, DataFlow",
      country: "Singapore",
    },
    {
      quote: "Outstanding quality and attention to detail. Our website now converts 3x better than before.",
      author: "Emma Williams",
      role: "Marketing Director, GrowthLab",
      country: "UK",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Header/>

      {/* Why Choose CodeMuse */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose CodeMuse</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with business insight to deliver solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{feature.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end digital solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Technologies We Master</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with the latest and most powerful technologies to build your digital products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-muted border border-border hover:border-primary/50 transition-colors"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/technologies">
              <Button variant="link" className="text-primary">
                View All Technologies <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by businesses worldwide to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-primary mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center gradient-hero rounded-2xl p-12 shadow-strong border border-border">
            <h2 className="mb-4">Let's Build Something Amazing for Your Business</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your ideas into powerful digital solutions? Get in touch with our team today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-medium">
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
