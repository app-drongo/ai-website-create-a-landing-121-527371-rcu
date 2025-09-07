import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  CreditCard, 
  Globe, 
  BarChart3, 
  Webhook,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process transactions and account updates in real-time with sub-second API response times.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Bank-grade Security",
      description: "PCI DSS Level 1 compliance with 256-bit encryption and multi-layer fraud protection.",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Payment Initiation",
      description: "Enable instant payments, transfers, and direct debits through secure banking channels.",
      badge: "Payments"
    },
    {
      icon: Globe,
      title: "Multi-region Support",
      description: "Connect to banks across Europe, UK, and North America with localized compliance.",
      badge: "Global"
    },
    {
      icon: BarChart3,
      title: "Transaction Analytics",
      description: "Advanced categorization and insights from transaction data with ML-powered analysis.",
      badge: "Analytics"
    },
    {
      icon: Webhook,
      title: "Smart Webhooks",
      description: "Real-time notifications for account changes, payments, and balance updates.",
      badge: "Integration"
    },
    {
      icon: Code2,
      title: "Developer-first APIs",
      description: "RESTful APIs with comprehensive SDKs, sandbox environment, and detailed documentation.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated fintech specialists available 24/7 for integration and compliance guidance.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built-in PSD2, GDPR, and Open Banking compliance with automatic regulatory updates.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Banking APIs
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Innovation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive banking integration platform designed for fintech startups, 
            financial institutions, and developers building the next generation of financial services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your financial services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request API Access
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}