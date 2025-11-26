import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Server, Database, Cloud, Zap, Brain, Shield } from "lucide-react";

export default function Technologies() {
  const categories = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      technologies: [
        { name: "Flutter", description: "Cross-platform native mobile apps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React Native", description: "JavaScript-based mobile development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ],
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      technologies: [
        { name: "React", description: "Modern UI component library", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", description: "React framework for production", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", description: "Progressive JavaScript framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript", description: "Type-safe JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for servers", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", description: "Versatile backend language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Laravel", description: "PHP web framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Express.js", description: "Fast Node.js web framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", description: "Advanced relational database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", description: "Flexible NoSQL database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", description: "Real-time cloud database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Redis", description: "In-memory data structure store", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", description: "Amazon Web Services cloud platform", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google Cloud", description: "GCP infrastructure and services", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Digital Ocean", description: "Developer-friendly cloud hosting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
        { name: "Docker", description: "Container platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      technologies: [
        { name: "GPT-4", description: "Advanced language model API", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "LangChain", description: "AI application framework", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "TensorFlow", description: "Machine learning platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "OpenAI API", description: "AI model integrations", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      ],
    },
    {
      icon: Zap,
      title: "Automation Tools",
      technologies: [
        { name: "N8n", description: "Workflow automation platform", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
        { name: "Zapier", description: "App integration service", logo: "https://cdn.zapier.com/ssr/f22afe74093af67b2d32600063e1d24eb5a8f965/_next/static/images/favicon-7a5e7eaf0ac5ccc503c3f057c7933115.ico" },
        { name: "Make", description: "Visual automation builder", logo: "https://www.make.com/en/help/resources/696f6990ac94b/image.png" },
        { name: "Integromat", description: "Advanced automation", logo: "https://www.make.com/en/help/resources/696f6990ac94b/image.png" },
      ],
    },
    {
      icon: Shield,
      title: "Security & Payments",
      technologies: [
        { name: "Stripe", description: "Online payment processing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
        { name: "Auth0", description: "Authentication platform", logo: "https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-badge.svg" },
        { name: "JWT", description: "Secure token authentication", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
        { name: "SSL/TLS", description: "Encryption protocols", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ssl_logo.png" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Technologies We Master</h1>
            <p className="text-xl text-muted-foreground">
              We leverage the latest and most powerful technologies to build robust, scalable, and future-proof digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <category.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <Card key={techIndex} className="border-border hover:border-primary/50 hover:shadow-soft transition-all group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <img 
                            src={tech.logo} 
                            alt={`${tech.name} logo`}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {tech.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why We Choose These Technologies</h2>
              <p className="text-muted-foreground text-lg">
                Every technology in our stack is carefully selected based on proven results and industry best practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Battle-Tested</h3>
                  <p className="text-sm text-muted-foreground">
                    Proven reliability with millions of users worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">High Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for speed, scalability, and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Future-Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern stacks that evolve with technology trends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Let's Build With the Right Stack</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Not sure which technologies are right for your project? We'll help you choose the perfect tech stack.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-medium">
                Discuss Your Project
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
