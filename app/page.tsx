import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const projects = [
    {
      title: "Lead Walmart Launch of Digital Twin & Physical AI",
      description:
        "As Principal Product Manager for Physical AI, Digital Twin, and spatial intelligence, led the end-to-end strategy and launch of a massive-scale Digital Twin ecosystem. Integrated real-time IoT sensor data into high-fidelity 2D and 3D environments that map the physical enterprise into a digital layer — enabling predictive maintenance, virtual walkthroughs, simulation modeling, and optimized spatial planning across the Walmart global footprint. The platform serves as a single source of truth for physical operations, bridging field-level hardware and executive strategic analysis.",
      image: "https://i.imgur.com/Oemqn2W.jpeg",
      tags: ["Digital Twin", "Physical AI", "3D Visualization", "IoT", "Predictive Analytics"],
      metrics: ["Enterprise-Scale Visualization", "Spatial Intelligence", "Real-Time IoT Integration"],
      year: "2024-5",
    },
    {
      title: "Deployed Real-Time IoT Monitoring & Alerting Application",
      description:
        "Led the complete redesign of Walmart's enterprise IoT alerting and monitoring platform. Built predictive failure detection across refrigeration and HVAC systems, dramatically reducing product loss and operational waste through real-time telemetry, intelligent alerting, and cross-functional operational workflows.",
      image: "https://i.imgur.com/nqBn8PQ.png",
      tags: ["IoT", "Predictive Analytics", "Product Strategy", "UX Research"],
      metrics: ["Predictive Failure Detection", "Enterprise IoT Scale", "Operational Waste Reduction"],
      year: "2023",
    },
    {
      title: "Delivered Walmart's First Indoor Positioning (mGPS) Solution",
      description:
        "Launched Walmart's first indoor positioning platform (mGPS), enabling spatial awareness and location intelligence inside retail facilities. Connected physical store environments to digital operational systems — a foundational capability for downstream Physical AI and Digital Twin initiatives.",
      image: "https://i.imgur.com/iBDNw0C.jpeg",
      tags: ["Indoor Positioning", "Spatial Intelligence", "IoT", "Enterprise Platforms"],
      metrics: ["First-to-Market at Walmart", "In-Store Spatial Awareness", "Physical-Digital Integration"],
      year: "2023",
    },
    {
      title: "Built End-to-End Ticketing System for Technician & IT Escalation",
      description:
        "Spearheaded the research, design, and development of Walmart's enterprise CMMS and single-point-of-entry ticketing platform. Unified technician, facilities, and IT escalation workflows into one system supporting nationwide store operations at massive scale.",
      image: "https://i.imgur.com/MzoNpsK.jpeg",
      tags: ["CMMS", "Machine Learning", "Data Analytics", "Enterprise Operations"],
      metrics: ["1.2M Associates", "15M+ Work Orders/Year", "Single-Point Escalation"],
      year: "2022",
    },
    {
      title: "Founded Karamazov Group — Executive Advisory & Technical Consulting",
      description:
        "Founded Karamazov Group as Principal Consultant, providing executive advisory on product strategy, enterprise architecture, digital transformation, IoT platforms, AI systems, computer vision, and Physical AI — including hands-on technical validation and model fine-tuning for select clients.",
      image: "https://i.imgur.com/dukHNB2.jpeg",
      tags: ["Executive Advisory", "Physical AI", "Enterprise Architecture", "Digital Transformation"],
      metrics: ["Founder & Principal Consultant", "IoT & AI Systems", "Ongoing Practice"],
      year: "2021",
    },
    {
      title: "Launched Frontier's 10M-Home Fiber Expansion Strategy",
      description:
        "In four months as Senior Engineering Manager, stood up the team, mission, and full network transformation framework for Frontier Communications — covering nationwide fiber deployment, greenfield expansion, and DSL-to-fiber migration. Used advanced analytics to secure board-level approval for major infrastructure investments. The 10M-home fiber buildout and accelerated revenue outcomes that followed were executed from the direction and strategy set during this engagement before transitioning to the next opportunity.",
      image: "https://i.imgur.com/tlzhiHe.jpeg",
      tags: ["Fiber Strategy", "Network Transformation", "Analytics", "Greenfield Expansion"],
      metrics: ["10M-Home Buildout Target", "$689M Annual Revenue Increase", "Board-Level Approval"],
      year: "2021",
    },
    {
      title: "Delivered Industry-First 5G SA Open RAN Network to Production",
      description:
        "Played a key leadership role in DISH's greenfield 5G NR Standalone network following the Boost Mobile acquisition. Drove core network architecture, hybrid-cloud data center strategy, and multi-vendor Open RAN integration — delivering the world's first containerized, fully software-based 5G Core/IMS in production and the industry's first Voice-over-New-Radio (VoNR) call. Designed predictive fault detection systems that materially reduced network operating costs while managing portions of a major infrastructure portfolio.",
      image: "https://i.imgur.com/1k9YbNa.jpeg",
      tags: ["5G SA", "Open RAN", "Cloud-Native Core", "Network Architecture"],
      metrics: ["First Containerized 5G Core/IMS", "First VoNR Call", "0–7.2M Customers in 3 Years", "Predictive Fault Detection"],
      year: "2021",
    },
    {
      title: "Led DISH MVDDS Spectrum Preservation Program",
      description:
        "Led DISH Network's nationwide MVDDS (Multichannel Video and Data Distribution Service) spectrum preservation deployment. Directed end-to-end strategy across site acquisition, rooftop lease negotiations, equipment provisioning, and partner coordination — protecting billions in strategic spectrum value and enabling scalable access across urban and suburban footprints.",
      image: "https://i.imgur.com/NeiQzGl.jpeg",
      tags: ["Spectrum Strategy", "Network Deployment", "Contract Negotiations", "Infrastructure"],
      metrics: ["Billions in Spectrum Value Preserved", "Nationwide Deployment", "Multi-Year Partner Agreements"],
      year: "2021",
    },
    {
      title: "Built Narrowband IoT / LoRaWAN Network for Enterprise Scale",
      description:
        "Directed the Narrowband IoT and LoRaWAN network build-out at DISH Network to support massive-scale IoT deployments across agriculture, industrial, and enterprise environments — including site infrastructure, hardware, manufacturing partnerships, analytics integrations, and third-party platform connectivity.",
      image: "https://i.imgur.com/SKnxtSq.jpeg",
      tags: ["NB-IoT", "LoRaWAN", "IoT Infrastructure", "M2M Communications"],
      metrics: ["Massive-Scale IoT Deployments", "Agriculture & Industrial", "End-to-End Network Build"],
      year: "2018",
    },
    {
      title: "Fixed 4G TDD-LTE Pilot – Product Launch & Performance Lead",
      description:
        "Led the pilot launch of a Fixed 4G TDD-LTE product in partnership with nTelos and Sprint, acting as the MVNO business owner. Defined and tracked KPIs across customer acquisition, break/fix incidents, product stability, attrition, profitability, and frontline performance. Spearheaded the design and development of a long-term TR-069/CWMP solution to improve device provisioning, monitoring, and management across LTE networks.",
      image: "https://i.imgur.com/X5y21fo.jpeg",
      tags: ["Fixed Wireless", "MVNO", "LTE", "Product Launch"],
      year: "2014",
    },
    {
      title: "DISH International & Sling TV",
      description:
        "Chosen to lead the full vertical stand-up of DISH International, an OTT IPTV service delivering content in more than 190 languages — owning product architecture, hardware design, billing, CRM, tax compliance, IT infrastructure, training, and operations. The same foundation powered the launch of Sling TV, one of the first major U.S. OTT streaming platforms. Contributed to award-winning innovation recognized by a Technology & Engineering Emmy®.",
      image: "https://i.imgur.com/82lw0SI.jpeg",
      tags: ["OTT Streaming", "IPTV", "Product Architecture", "International Media"],
      metrics: ["190+ Languages", "Technology & Engineering Emmy®", "10M Downloads"],
      year: "2014",
    },
    {
      title: "Launched Cryptocurrency Payment Support at DISH",
      description:
        "Led the integration of Bitcoin Cash as a payment option for DISH Network customers, expanding upon the company's initial acceptance of Bitcoin in 2014. Transitioned payment processing to BitPay, enabling secure, real-time cryptocurrency transactions for subscriptions and pay-per-view services. This initiative enhanced customer payment flexibility and positioned DISH as a pioneer in adopting blockchain payment solutions within the pay-TV industry.",
      image: "https://i.imgur.com/At1mRRl.jpeg",
      tags: ["Payments", "Blockchain", "Product Launch", "FinTech"],
      year: "2014",
    },
    {
      title: "Launched dishNET Wireline — DSL Broadband Across 26 States",
      description:
        "Led the full operational and technical launch of dishNET Wireline, DISH Network's DSL broadband service spanning 26 states. Owned end-to-end product delivery including network integration, customer provisioning, installation workflows, and nationwide support frameworks for a new wireline connectivity business built from scratch.",
      image: "https://i.imgur.com/L1sdXjk.jpeg",
      tags: ["DSL Broadband", "Wireline", "Product Launch", "Nationwide Operations"],
      metrics: ["26-State Launch", "End-to-End Ownership", "New Connectivity Business"],
      year: "2014",
    },
    {
      title: "Launched Hopper with Sling – DISH's Award-Winning Whole-Home DVR",
      description:
        "Played a central role in launching the Hopper family of set-top boxes — introducing whole-home DVR with simultaneous recording of up to six live programs, multi-room viewing, and integrated Slingbox technology for remote streaming on any device. Owned product specifications, user experience, documentation, training, and operational readiness. The platform won multiple Best of CES awards and helped drive a major increase in shareholder value during the launch period.",
      image: "https://i.imgur.com/Gi1klTG.jpeg",
      tags: ["Consumer Electronics", "Whole-Home DVR", "Product Launch", "CES Innovation"],
      metrics: ["Multiple Best of CES Awards", "Six Simultaneous Recordings", "Multi-Room & Remote Streaming"],
      year: "2013",
    },
    {
      title: "Launched DISH Anywhere (DISHOnline.com)",
      description:
        "Led the operationalization of DISH Anywhere and DISHOnline.com — integrating live streaming, video-on-demand, Blockbuster early-release content, and Sling capabilities into a unified customer experience accessible across devices. Connected the Hopper platform to the cloud and defined the end-to-end product and operations model for place-shifted television.",
      image: "https://i.imgur.com/8FB1feQ.jpeg",
      tags: ["OTT", "Live Streaming", "VOD", "Cross-Platform"],
      metrics: ["Live + On-Demand Integration", "Multi-Device Access", "Unified Streaming Experience"],
      year: "2013",
    },
    {
      title: "Founded OnTech Smart Services — Smart-Home Installation Business",
      description:
        "Helped found and scale OnTech Smart Services, DISH Network's internal smart-home installation business. Built the service from zero — defining product strategy, service catalog, installation and support models, customer experience standards, and nationwide operational processes for TV mounting, device setup, and home technology services.",
      image: "https://i.imgur.com/E6XIcre.jpeg",
      tags: ["Smart Home", "Service Business", "Operations", "Customer Experience"],
      metrics: ["Built from Zero", "Nationwide Service Model", "Installation & Support Operations"],
      year: "2012",
    },
    {
      title: "dishNET Product Launch Lead – Satellite Internet for Rural Markets",
      description:
        "Led the product launch of dishNET, DISH Network's VSAT satellite internet service for rural markets — including ground station integrations, custom modem and router strategies, NOC telemetry, and nationwide support systems built in partnership with HughesNet, WildBlue, and ViaSat. Prioritized features for scalability and reliability while driving user acquisition and long-term product viability.",
      image: "https://i.imgur.com/L1sdXjk.jpeg",
      tags: ["Satellite Internet", "VSAT", "Rural Broadband", "Product Launch"],
      metrics: ["0–1M Customers in 1 Year", "HughesNet / ViaSat Integration", "Nationwide VSAT Launch"],
      year: "2012",
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
                18+ years building world-class products and platforms at Fortune 5 companies — from streaming media and
                cloud-native 5G to enterprise Physical AI and Digital Twin. Passionate about creating user-centered
                solutions that drive measurable business impact at scale.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://i.imgur.com/FVAowhG.jpeg"
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
                  I'm a product and technology executive whose career has been defined by building businesses in emerging
                  and disruptive markets. I began as an entrepreneur before the 2008 financial crisis, then spent
                  thirteen years at DISH Network repeatedly selected to launch new platforms, services, and networks —
                  from Hopper and Sling TV to satellite broadband, IoT, and cloud-native 5G.
                </p>
                <p>
                  Today I lead Physical AI, Digital Twin, and predictive analytics initiatives at Walmart, and advise
                  select clients through Karamazov Group. My expertise spans product strategy, behavioral science,
                  enterprise IoT, telecommunications infrastructure, and go-to-market execution at national scale.
                </p>
                <p>I'm passionate about mentoring the next generation of product leaders and eliminating apathy.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product Strategy",
                    "Digital Twin",
                    "Physical AI",
                    "IoT Platforms",
                    "5G & Open RAN",
                    "Data Analytics",
                    "Behavioral Science",
                    "OTT & Streaming",
                    "Telecommunications",
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
                  <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-80 lg:h-96 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      {/* Key Results (render only if metrics array exists & has items) */}
                      {project.metrics?.length ? (
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
                      ) : null}

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
                    <Link
                      href="https://linkedin.com/in/jamesven"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      linkedin.com/in/jamesven
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
          <p>&copy; 2026 James Venrick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
