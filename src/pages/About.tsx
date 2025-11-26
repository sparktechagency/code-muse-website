import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence in every line of code and every pixel of design.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Clear communication and honest partnerships with our clients.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're invested in your growth.",
    },
  ];

  const clients = [
    {
      type: "Startups",
      description: "Launch your MVP and scale with confidence using proven technologies.",
    },
    {
      type: "Enterprise",
      description: "Transform legacy systems and build robust enterprise solutions.",
    },
    {
      type: "Agencies",
      description: "White-label development partner for creative and marketing agencies.",
    },
    {
      type: "SaaS Companies",
      description: "Build scalable platforms with advanced features and integrations.",
    },
  ];

  const reasons = [
    "Real measurable results that drive business growth",
    "Fast and secure development with best practices",
    "Flexible engagement models: project-based or dedicated teams",
    "24/7 support and transparent communication",
    "Proven track record with global clients",
    "Deep expertise in emerging technologies like AI",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About CodeMuse</h1>
            <p className="text-xl text-muted-foreground">
              We're a global digital development agency on a mission to empower businesses with intelligent technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality digital solutions that transform businesses and create lasting value. 
                  We combine technical excellence with strategic thinking to build products that users love and businesses depend on.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Eye className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the trusted technology partner for businesses worldwide, pioneering the integration of AI 
                  and automation in digital products. We envision a future where technology seamlessly enhances human potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who We Help</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We partner with businesses of all sizes, from ambitious startups to established enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{client.type}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Clients Trust Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just build software — we build lasting partnerships based on trust and results.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-lg">✓</span>
                      </div>
                      <p className="text-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
