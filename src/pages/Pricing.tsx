import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      priceRange: "$5K - $15K",
      features: [
        "Single platform (web or mobile)",
        "Basic features and functionality",
        "Standard UI/UX design",
        "Up to 3 revisions",
        "2-4 weeks delivery",
        "1 month post-launch support",
        "Basic documentation",
      ],
      ideal: "Landing pages, simple mobile apps, portfolio websites",
      color: "from-primary/20 to-primary/10",
    },
    {
      name: "Professional",
      description: "For businesses ready to scale",
      priceRange: "$15K - $50K",
      features: [
        "Multi-platform (web + mobile)",
        "Advanced features and integrations",
        "Custom UI/UX design",
        "Unlimited revisions",
        "4-8 weeks delivery",
        "3 months post-launch support",
        "Complete documentation",
        "API development",
        "Admin dashboard",
        "Payment integration",
      ],
      ideal: "SaaS platforms, e-commerce, complex mobile apps, automation workflows",
      color: "from-primary to-primary-light",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      priceRange: "$50K+",
      features: [
        "Full-stack development",
        "AI and advanced automation",
        "Premium custom design",
        "Unlimited revisions",
        "8+ weeks delivery",
        "6 months post-launch support",
        "Comprehensive documentation",
        "Dedicated team",
        "Priority support 24/7",
        "Performance optimization",
        "Security audit",
        "Scalability planning",
      ],
      ideal: "Enterprise platforms, AI-powered applications, complex ecosystems",
      color: "from-primary-dark to-primary",
    },
  ];

  const additionalServices = [
    { service: "AI Agent Development", range: "$3K - $10K" },
    { service: "Automation Workflow Setup", range: "$1K - $5K" },
    { service: "API Integration", range: "$500 - $3K" },
    { service: "UI/UX Design Only", range: "$2K - $8K" },
    { service: "Monthly Maintenance", range: "$500 - $2K/month" },
    { service: "Performance Optimization", range: "$1K - $5K" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Flexible packages designed to fit your budget and project requirements. Get started with a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-border relative ${pkg.popular ? 'shadow-strong border-primary' : 'hover:shadow-medium'} transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 gradient-primary text-primary-foreground text-sm font-medium rounded-full shadow-soft">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}>
                    <span className={`text-2xl font-bold ${ index === 0 ? 'text-primary' : 'text-white'}`}>{pkg.name[0]}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">{pkg.priceRange}</div>
                    <p className="text-sm text-muted-foreground">One-time project cost</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-xs font-semibold text-foreground mb-2">Ideal For:</p>
                    <p className="text-sm text-muted-foreground">{pkg.ideal}</p>
                  </div>

                  <Link to="/contact">
                    <Button
                      className={`w-full ${pkg.popular ? 'gradient-primary text-primary-foreground hover:opacity-90' : 'border-primary text-primary hover:bg-primary/5'}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Get Started <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Additional Services</h2>
              <p className="text-muted-foreground text-lg">
                Need something specific? We offer individual services to complement your project.
              </p>
            </div>
            
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {additionalServices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{item.service}</span>
                      <span className="text-primary font-semibold">{item.range}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Pricing FAQs</h2>
            
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do you determine project costs?</h3>
                  <p className="text-muted-foreground">
                    Pricing depends on project complexity, features, platforms, timeline, and technology stack. We provide detailed quotes after understanding your requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Do you offer payment plans?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer milestone-based payments. Typically: 30% upfront, 40% during development, and 30% upon completion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What's included in post-launch support?</h3>
                  <p className="text-muted-foreground">
                    Bug fixes, minor updates, performance monitoring, and technical support. Extended support packages are available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I get a custom quote?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Every project is unique. Contact us for a detailed consultation and personalized quote.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Get Your Custom Quote?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a free consultation to discuss your project and receive a detailed proposal.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-medium">
                Get Your Free Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
