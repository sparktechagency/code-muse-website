import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      country: "",
      service: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to bring your project to life? Fill out the form below and our team will reach out within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          placeholder="United States"
                          value={formData.country}
                          onChange={(e) => handleChange("country", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mobile">Mobile App Development</SelectItem>
                            <SelectItem value="website">Website Development</SelectItem>
                            <SelectItem value="ai-integration">AI Integration</SelectItem>
                            <SelectItem value="automation">AI Automation</SelectItem>
                            <SelectItem value="ai-agents">AI Agents</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                          <SelectItem value="15k-50k">$15K - $50K</SelectItem>
                          <SelectItem value="50k+">$50K+</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-medium"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:hello@codemuse.com" className="text-sm text-muted-foreground hover:text-primary">
                          hello@codemuse.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Global Agency</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Emergency support available 24/7 for active projects
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
