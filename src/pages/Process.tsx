import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Palette, Code, TestTube, Rocket, Wrench, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
      deliverables: ["Project scope document", "Technical feasibility analysis", "Timeline and budget estimate"],
    },
    {
      icon: FileText,
      title: "Planning",
      description: "Detailed planning of features, architecture, and technology stack for your project.",
      deliverables: ["Project roadmap", "Technical specifications", "User stories and workflows"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that align with your brand identity.",
      deliverables: ["Wireframes", "High-fidelity mockups", "Interactive prototypes", "Design system"],
    },
    {
      icon: Code,
      title: "Development",
      description: "Our expert developers bring your project to life using best practices and modern technologies.",
      deliverables: ["Clean, maintainable code", "Regular progress updates", "Version control", "API documentation"],
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Comprehensive testing to ensure your product is bug-free and performs flawlessly.",
      deliverables: ["Functional testing", "Performance testing", "Security testing", "User acceptance testing"],
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Smooth launch to production with proper monitoring and optimization.",
      deliverables: ["Production deployment", "Server setup", "Performance monitoring", "Launch support"],
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support and updates to keep your product running smoothly and up-to-date.",
      deliverables: ["Bug fixes", "Feature updates", "Performance optimization", "24/7 technical support"],
    },
  ];

  const expectations = [
    {
      icon: CheckCircle,
      title: "Daily or Weekly Updates",
      description: "Regular progress reports so you're always in the loop.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Communication",
      description: "Open channels via Slack, email, or video calls - whatever works best for you.",
    },
    {
      icon: CheckCircle,
      title: "Secure Development",
      description: "Industry-standard security practices and code reviews throughout the project.",
    },
    {
      icon: CheckCircle,
      title: "Professional Project Management",
      description: "Dedicated project manager to coordinate timeline, resources, and deliverables.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Development Process</h1>
            <p className="text-xl text-muted-foreground">
              A proven, transparent workflow that takes your project from concept to launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 -z-10" />
                  )}
                  
                  <Card className="border-border hover:shadow-medium transition-all">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Icon and Number */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
                              <step.icon className="text-primary-foreground" size={28} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{index + 1}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Deliverables:</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-start space-x-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What You Can Expect</h2>
              <p className="text-muted-foreground text-lg">
                Working with CodeMuse means transparent, professional collaboration at every step.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {expectations.map((expectation, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <expectation.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{expectation.title}</h3>
                        <p className="text-sm text-muted-foreground">{expectation.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and see how our proven process can bring your vision to life.
            </p>
            <a href="https://www.fiverr.com/code_muse" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-medium">
                Schedule a Discovery Call
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
