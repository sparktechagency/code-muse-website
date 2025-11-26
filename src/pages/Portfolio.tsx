import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "HealthTrack Pro",
      category: "Mobile App",
      description: "A comprehensive health and fitness tracking app with AI-powered workout recommendations and meal planning.",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Node.js"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      results: ["500K+ downloads", "4.8 star rating", "Featured by Apple"],
    },
    {
      title: "ShopSmart",
      category: "E-Commerce Website",
      description: "Modern e-commerce platform with AI-powered product recommendations and seamless checkout experience.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      results: ["3x conversion rate", "$2M+ in sales", "40% faster checkout"],
    },
    {
      title: "ChatBot AI Assistant",
      category: "AI Integration",
      description: "Intelligent customer support chatbot with natural language understanding and multi-language support.",
      technologies: ["GPT-4", "Python", "React", "WebSocket"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
      results: ["85% automation rate", "60% cost reduction", "24/7 availability"],
    },
    {
      title: "AutoFlow CRM",
      category: "Automation",
      description: "Complete business automation system integrating CRM, email marketing, and payment processing.",
      technologies: ["N8n", "Zapier", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      results: ["20 hrs/week saved", "99.9% uptime", "Zero manual errors"],
    },
    {
      title: "DataInsight Dashboard",
      category: "Web Application",
      description: "Real-time analytics dashboard with interactive visualizations and AI-powered insights.",
      technologies: ["React", "D3.js", "Python", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      results: ["Real-time processing", "5M+ data points", "Sub-second queries"],
    },
    {
      title: "TravelMate App",
      category: "Mobile App",
      description: "Travel planning and booking app with AI itinerary suggestions and social features.",
      technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      results: ["200K+ users", "Featured in press", "98% user satisfaction"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden group hover:shadow-strong transition-all">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="border-t border-border pt-4 space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <button className="mt-4 text-primary hover:text-primary-light transition-colors flex items-center text-sm font-medium">
                    View Case Study <ExternalLink className="ml-1" size={14} />
                  </button>
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
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something amazing together. Get in touch to discuss your ideas.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-medium">
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
