import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Download, Mail, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const projects = [
    {
      title: "Deployed Real-Time IoT Monitoring & Alerting Application",
      description:
        "Led the complete redesign of Walmart's Massive IoT alerting system resulting in 62.5% reduction in product loss.",
      image: "https://corporate.walmart.com/content/corporate/en_us/news/2021/01/14/how-walmart-leverages-iot-to-keep-your-ice-cream-frozen/jcr:content/newsimage.img.png/1692736581978.png",
      tags: ["Product Strategy", "UX Research", "User Empathy"],
      metrics: ["62.5% Reduction", "$1b Revenue", "1.2M Users"],
      year: "2023",
    },
    {
      title: "Built End-to-End Ticketing System for Technician & IT Escalation",
      description:
        "Spearheaded the development, design, and research of a single-point-of-entry ticketing system connected to disparate backend sources.",
      image: "https://play-lh.googleusercontent.com/-Siv1LmkCkcZDkVl4MyX7WP9Ra1xuFbDhdUTsM2sA-5oxG7FyyMfj2brmsALmtJS7g",
      tags: ["Machine Learning", "Data Analytics", "Personalization"],
      metrics: ["35,000% ↑ Engagement", "1.2M Users"],
      year: "2022",
    },
        {
      title: "Launched Frontier’s 10M-Home Fiber Expansion Strategy",
      description:
        "Led network strategy and deployment planning for Frontier Communications’ accelerated fiber buildout, targeting 10 million locations by 2025. Directed infrastructure investment, vendor selection, and deployment prioritization to scale fiber-to-the-premises (FTTP) across 25 states. This initiative positioned Frontier as a leading fiber broadband provider, delivering symmetrical gigabit speeds and supporting the company's transformation into a fiber-first business.",
      image: "https://mms.businesswire.com/media/20220222005197/en/1365478/4/2g-girl.jpg?download=1",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2021",
    },
    {
      title: "Delivered Industry-First 5G SA Open RAN Network to Production",
      description:
        "Led the end-to-end launch of the world’s first 5G Standalone (SA) Open RAN network, integrating disaggregated radio and core components across multiple vendors into a fully cloud-native, carrier-grade architecture. Drove cross-functional alignment between engineering, vendor partners, and operations to overcome industry-first challenges in interoperability, orchestration, and performance optimization. Successfully transitioned from lab validation to commercial deployment, setting a global benchmark for open, flexible, and scalable next-gen wireless infrastructure.",
      image: "https://mma.prnewswire.com/media/2102459/June5_ProjectGenesisMap.jpg?w=2700",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2021",
    },

     {
      title: "Drove End-to-End Launch of DISH MVDDS Service",
      description:
        "Serve as Site Acquisition Manager and Network Deployment Lead for DISH Network’s Multichannel Video and Data Distribution Service (MVDDS) initiative. Lead end-to-end deployment activities including rooftop lease negotiations, equipment provisioning, and site coordination. Successfully broker multi-year agreements with partners and property owners, ensuring scalable access across urban and suburban footprints. Oversee user equipment delivery and provisioning workflows, maintain data integrity across deployment systems, and manage key relationships between DISH and third-party installation and service partners.",
      image: "https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/fiercewireless/1625672576/dish800.jpg/dish800.jpg?VersionId=EpsGvukNLMYVdO9CioHdMOPB6HMKh.Pk",
      tags: ["Mobile Strategy", "Network Deployment", "Contract Negotiations"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2021",
    },
     {
      title: "Fixed 4G TDD-LTE Pilot – Product Launch & Performance Lead",
      description:
        "Led the pilot launch of a Fixed 4G TDD-LTE product in partnership with nTelos and Sprint, acting as the MVNO business owner. Defined and tracked KPIs across customer acquisition, break/fix incidents, product stability, attrition, profitability, and frontline performance. Spearheaded the design and development of a long-term TR-069/CWMP solution to improve device provisioning, monitoring, and management across LTE networks. Balanced technical execution with customer insights to validate market readiness and inform long-term strategy.",
      image: "https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/dishnetwork.jpg?VersionId=Ai7iDtDf6b8f8t.RQZUIOJpKIT10.Uvi",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2014",
    },
     {
      title: "DISH International/Sling TV",
      description:
        "Led strategy and execution for Sling TV, one of the first live OTT streaming platforms in the U.S. Oversaw launch features including customizable channel packages, multi-device support, and real-time streaming enhancements. Partnered with cross-functional teams to drive user growth to over 2 million subscribers and helped position Sling TV as an industry leader with over $1.8B in annual revenue. Contributed to award-winning innovation recognized by a Technology & Engineering Emmy®, while optimizing roadmap prioritization, user experience, and platform scalability.",
      image: "https://yt3.googleusercontent.com/JRDiGJJgf-l9nhW_XA8Y5-5IUnGKdDu5VlRcaosA8gRTPTxfnJh0w-QfoOa2Le5uHGQpS8V_Ruc=s900-c-k-c0x00ffffff-no-rj",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["1.8b Annual Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2014",
    },

     {
      title: "Launched Cryptocurrency Payment Support at DISH",
      description:
        "Led the integration of Bitcoin Cash as a payment option for DISH Network customers, expanding upon the company's initial acceptance of Bitcoin in 2014. Transitioned payment processing to BitPay, enabling secure, real-time cryptocurrency transactions for subscriptions and pay-per-view services. This initiative enhanced customer payment flexibility and positioned DISH as a pioneer in adopting blockchain payment solutions within the pay-TV industry.",
      image: "https://static.cryptobriefing.com/wp-content/uploads/2018/08/02100406/Dish-Network-Will-Accept-Bitcoin-Cash-After-Partnering-With-BitPay-800x420.jpg",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2014",
    },
     {
      title: "Launched Hopper with Sling – DISH’s Award-Winning Whole-Home DVR",
      description:
        "Led the product launch of the DISH Hopper with Sling, the industry’s first whole-home HD DVR with integrated place-shifting and multi-device streaming. Defined product vision, shaped feature roadmap, and drove cross-functional execution from concept to CES debut. Delivered a category-defining experience that earned “Best of Show” at CES 2013, positioning DISH as an innovation leader in consumer entertainment technology.",
      image: "https://planetdish.com/wp-content/uploads/2017/05/cropped-DISH-Network-Hopper-Favicon.png",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2013",
    },
       {
      title: "dishNET Product Launch Lead – Satellite Internet for Rural Markets",
      description:
        "Led the product launch of dishNET, DISH Network’s VSAT satellite internet service for rural markets. Prioritized features for scalability and reliability, and partnered with engineering and operations to drive deployment. Focused on user acquisition, service performance, and long-term product viability within a $500m+ revenue portfolio.",
      image: "https://planetdish.com/wp-content/uploads/2017/04/DISH-Network-DISHnet-Internet.png",
      tags: ["Mobile Strategy", "Cross-Platform", "Growth"],
      metrics: ["200% ↑ Mobile Revenue", "4.8★ App Rating", "10M Downloads"],
      year: "2012",
    },
    ]

  const articles = [
    {
      title: "The Future of Product Management in AI-First Companies",
      publication: "Harvard Business Review",
      date: "Dec 2023",
      url: "#",
      description: "Exploring how product managers must evolve their skillsets for the AI revolution.",
    },
    {
      title: "Building Products at Scale: Lessons from Fortune 5",
      publication: "Product Management Today",
      date: "Sep 2023",
      url: "#",
      description: "Key insights on managing product portfolios worth billions of dollars.",
    },
    {
      title: "Data-Driven Decision Making: Beyond the Metrics",
      publication: "MIT Sloan Review",
      date: "Jun 2023",
      url: "#",
      description: "How to balance quantitative data with qualitative insights in product decisions.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">James Venrick</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </Link>
              <Link href="#articles" className="text-gray-600 hover:text-gray-900 transition-colors">
                Articles
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Principal Product Manager
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                15 years of experience building world-class products at Fortune 5 companies. Passionate about creating
                user-centered solutions that drive business impact at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQENHKTkoKHyHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676768888655?e=1753315200&v=beta&t=Bx_0QATeB-4GnuvvmSQjVf_GzEb0EylrgootyuvkF2E"
                alt="James Venrick"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a seasoned product leader with 15 years of experience building and scaling products that serve
                  millions of users. Currently serving as Principal Product Manager at a Fortune 5 company, where I lead
                  cross-functional teams to deliver solutions that serve the user.
                </p>
                <p>
                  My expertise spans product strategy, user research, data analytics, program management, and
                  go-to-market execution. I've successfully launched products that generated over $1b in annual revenue and
                  have been recognized with multiple industry awards.
                </p>
                <p>I'm passionate about mentoring the next generation of product managers and eliminating apathy.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product Strategy",
                    "User Research",
                    "Data Analytics",
                    "A/B Testing",
                    "Machine Learning",
                    "Mobile Strategy",
                    "Growth",
                    "Telecommunications Networks",
                    "Leadership",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of impactful products and initiatives I've led throughout my career
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, i) => (
                            <Badge key={i} className="bg-green-100 text-green-800 hover:bg-green-100">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
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

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Published Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing insights on product management, leadership, and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{article.publication}</Badge>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <Link
                    href={article.url}
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
                  >
                    Read article
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always interested in discussing product strategy, mentoring opportunities, or potential
              collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">venrick@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      linkedin.com/in/jamesven
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-gray-600" />
                    <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      @sarahchen_pm
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What I can help with:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Product strategy consulting</li>
                  <li>• Mentoring and career guidance</li>
                  <li>• Speaking engagements</li>
                  <li>• Advisory opportunities</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2024 Sarah Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
