// components/FloatingAIAssistant.js
"use client";
import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm your AI Assistant. I can answer questions about our company, IT solutions, industries, and products. How can I assist you today?", 
      sender: "ai" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base for website-specific information
  const websiteKnowledge = {
    company: {
      name: "Aethermind Software",
      founded: "2018",
      description: "A leading technology company providing innovative software solutions",
      mission: "To empower businesses with innovative and reliable software solutions",
      vision: "To be a global leader in digital transformation, helping businesses thrive in the digital age",
      values: [
        "Innovation: Constantly pushing boundaries",
        "Integrity: Honest and transparent in all dealings",
        "Excellence: Delivering superior quality solutions",
        "Collaboration: Working together for success",
        "Customer-Centricity: Putting clients first"
      ],
      team: {
        size: "150+ professionals",
        expertise: "Average 8+ years of experience in technology",
        structure: "Cross-functional teams with specialized expertise"
      },
      locations: [
        "Headquarters: Bangalore, India",
        "Regional Office: New York, USA",
        "Development Center: Pune, India"
      ],
      achievements: [
        "ISO 9001:2015 and ISO 27001:2013 certified",
        "Recognized as 'Top Software Development Company' by Tech Review 2023",
        "100+ successful projects delivered across 15+ countries",
        "95% client retention rate"
      ],
      whyChooseUs: [
        "Experienced team of professionals",
        "Customized solutions tailored to your needs",
        "Cutting-edge technology and innovation",
        "24/7 customer support",
        "Cost-effective solutions",
        "Proven track record of success",
        "Agile development methodology",
        "Transparent project management",
        "Scalable solutions for future growth",
        "Strong focus on security and compliance"
      ]
    },
    itSolutions: [
      {
        name: "Software Development",
        description: "Custom software solutions tailored to your business needs",
        details: "We develop bespoke software applications that address your specific business challenges. Our team follows agile methodologies to deliver scalable, secure, and high-performance software solutions.",
        process: [
          "Discovery & Requirements Analysis",
          "UI/UX Design",
          "Development & Testing",
          "Deployment & Training",
          "Maintenance & Support"
        ],
        technologies: [
          "Frontend: React, Angular, Vue.js",
          "Backend: Node.js, Python, Java, .NET",
          "Databases: MySQL, MongoDB, PostgreSQL",
          "Cloud: AWS, Azure, Google Cloud"
        ],
        benefits: [
          "Increased operational efficiency",
          "Competitive advantage",
          "Scalability for business growth",
          "Enhanced customer experience",
          "Data-driven decision making"
        ]
      },
      {
        name: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to grow your online presence",
        details: "Our digital marketing services include SEO, SEM, social media marketing, content marketing, and email campaigns to enhance your brand visibility and drive customer engagement.",
        services: [
          "Search Engine Optimization (SEO)",
          "Pay-Per-Click (PPC) Advertising",
          "Social Media Marketing",
          "Content Marketing",
          "Email Marketing",
          "Conversion Rate Optimization",
          "Analytics & Reporting"
        ],
        approach: [
          "Strategy Development",
          "Campaign Implementation",
          "Performance Tracking",
          "Continuous Optimization",
          "ROI Measurement"
        ],
        benefits: [
          "Increased brand visibility",
          "Higher website traffic",
          "Improved lead generation",
          "Better customer engagement",
          "Measurable results and ROI"
        ]
      },
      {
        name: "Technical Support",
        description: "24/7 technical support for all your IT needs",
        details: "We provide round-the-clock technical support to ensure your systems run smoothly. Our support team is trained to resolve issues quickly and efficiently.",
        supportLevels: [
          "L1: Basic troubleshooting and issue resolution",
          "L2: In-depth technical analysis and problem-solving",
          "L3: Expert support for complex issues and escalations"
        ],
        services: [
          "Help Desk Support",
          "Remote Troubleshooting",
          "On-site Support",
          "System Monitoring",
          "Preventive Maintenance",
          "User Training"
        ],
        responseTime: {
          critical: "15 minutes",
          high: "1 hour",
          medium: "4 hours",
          low: "24 hours"
        },
        benefits: [
          "Minimized downtime",
          "Increased productivity",
          "Extended system lifespan",
          "Predictable IT costs",
          "Access to expert knowledge"
        ]
      },
      {
        name: "API Servicing",
        description: "Robust API development and integration services",
        details: "We design, develop, and integrate APIs that enable seamless communication between different software systems. Our APIs are secure, scalable, and well-documented.",
        services: [
          "Custom API Development",
          "Third-party API Integration",
          "API Testing & Documentation",
          "API Security Implementation",
          "Legacy System API Enablement",
          "API Management & Monitoring"
        ],
        technologies: [
          "RESTful APIs",
          "GraphQL",
          "SOAP",
          "gRPC",
          "Webhooks",
          "API Gateways"
        ],
        standards: [
          "OpenAPI Specification",
          "OAuth 2.0",
          "JWT Authentication",
          "Rate Limiting",
          "Throttling"
        ],
        benefits: [
          "Seamless system integration",
          "Improved interoperability",
          "Enhanced functionality",
          "Faster development cycles",
          "Better security"
        ]
      },
      {
        name: "Security",
        description: "Advanced cybersecurity solutions to protect your business",
        details: "Our security services include vulnerability assessments, penetration testing, security audits, and implementation of robust security measures to protect your digital assets.",
        services: [
          "Vulnerability Assessment",
          "Penetration Testing",
          "Security Audits",
          "Security Implementation",
          "Security Monitoring",
          "Incident Response",
          "Compliance Management"
        ],
        focusAreas: [
          "Network Security",
          "Application Security",
          "Data Security",
          "Cloud Security",
          "Identity & Access Management",
          "Security Awareness Training"
        ],
        compliance: [
          "GDPR",
          "HIPAA",
          "PCI DSS",
          "SOC 2",
          "ISO 27001"
        ],
        benefits: [
          "Protection against cyber threats",
          "Regulatory compliance",
          "Customer trust enhancement",
          "Business continuity assurance",
          "Risk mitigation"
        ]
      },
      {
        name: "Web Hosting",
        description: "Reliable and secure web hosting services",
        details: "We offer high-performance web hosting solutions with guaranteed uptime, robust security measures, and scalable resources to meet your growing business needs.",
        hostingTypes: [
          "Shared Hosting",
          "VPS Hosting",
          "Dedicated Servers",
          "Cloud Hosting",
          "WordPress Hosting",
          "E-commerce Hosting"
        ],
        features: [
          "99.9% Uptime Guarantee",
          "SSD Storage",
          "Free SSL Certificate",
          "Daily Backups",
          "CDN Integration",
          "Scalable Resources",
          "One-click Installer"
        ],
        security: [
          "Firewall Protection",
          "DDoS Protection",
          "Malware Scanning",
          "Spam Filtering",
          "Regular Updates"
        ],
        benefits: [
          "High website performance",
          "Enhanced security",
          "Scalability for traffic growth",
          "Reliable email services",
          "Expert technical support"
        ]
      },
      {
        name: "App Development",
        description: "Mobile app development for iOS and Android platforms",
        details: "Our team develops intuitive, feature-rich mobile applications for both iOS and Android platforms, ensuring optimal performance and user experience.",
        services: [
          "Native App Development (iOS & Android)",
          "Cross-Platform App Development",
          "UI/UX Design",
          "App Testing & QA",
          "App Store Optimization",
          "Maintenance & Support"
        ],
        technologies: [
          "iOS: Swift, Objective-C",
          "Android: Kotlin, Java",
          "Cross-Platform: React Native, Flutter, Xamarin",
          "Backend: Node.js, Firebase, AWS"
        ],
        features: [
          "Offline Functionality",
          "Push Notifications",
          "In-App Purchases",
          "Location Services",
          "Camera Integration",
          "Social Media Integration"
        ],
        benefits: [
          "Increased customer engagement",
          "Brand visibility enhancement",
          "Direct marketing channel",
          "Competitive advantage",
          "Improved customer loyalty"
        ]
      }
    ],
    industries: [
      {
        name: "Health Care",
        description: "Technology solutions for the healthcare industry",
        details: "We provide specialized IT solutions for healthcare providers including EHR systems, telemedicine platforms, patient management software, and healthcare analytics tools.",
        challenges: [
          "Data security and privacy concerns",
          "Regulatory compliance requirements",
          "Interoperability between systems",
          "Patient engagement and experience",
          "Operational efficiency"
        ],
        solutions: [
          "Electronic Health Records (EHR)",
          "Telemedicine Platforms",
          "Patient Management Systems",
          "Healthcare Analytics",
          "Medical Imaging Solutions",
          "HIPAA-Compliant Communication"
        ],
        benefits: [
          "Improved patient care",
          "Enhanced operational efficiency",
          "Better data management",
          "Regulatory compliance",
          "Cost reduction"
        ],
        successStories: [
          "Implemented a telemedicine solution for a hospital network that increased patient reach by 40%",
          "Developed a custom EHR system for a multi-specialty clinic that reduced documentation time by 30%"
        ]
      },
      {
        name: "Education",
        description: "Innovative technology solutions for educational institutions",
        details: "Our education technology solutions include learning management systems, virtual classrooms, student information systems, and educational analytics platforms.",
        challenges: [
          "Remote learning infrastructure",
          "Student engagement",
          "Administrative efficiency",
          "Data management",
          "Personalized learning"
        ],
        solutions: [
          "Learning Management Systems (LMS)",
          "Virtual Classroom Platforms",
          "Student Information Systems",
          "Educational Analytics",
          "Online Assessment Tools",
          "Library Management Systems"
        ],
        benefits: [
          "Enhanced learning experience",
          "Improved administrative efficiency",
          "Data-driven decision making",
          "Increased accessibility",
          "Cost-effective education delivery"
        ],
        successStories: [
          "Deployed an LMS for a university that served 10,000+ students during the pandemic",
          "Created a virtual classroom solution for a K-12 school that improved student engagement by 35%"
        ]
      },
      {
        name: "Ecommerce",
        description: "Comprehensive e-commerce solutions for online businesses",
        details: "We develop end-to-end e-commerce solutions including online stores, payment gateways, inventory management systems, and customer relationship management tools.",
        challenges: [
          "Cart abandonment",
          "Customer retention",
          "Inventory management",
          "Payment security",
          "Multi-channel selling"
        ],
        solutions: [
          "E-commerce Platform Development",
          "Payment Gateway Integration",
          "Inventory Management Systems",
          "CRM Integration",
          "Order Management Systems",
          "Analytics & Reporting"
        ],
        benefits: [
          "Increased sales conversion",
          "Improved customer experience",
          "Streamlined operations",
          "Better inventory control",
          "Data-driven marketing"
        ],
        successStories: [
          "Built a custom e-commerce platform for a fashion retailer that increased online sales by 60%",
          "Implemented an inventory management system for a multi-channel retailer that reduced stockouts by 45%"
        ]
      },
      {
        name: "Technology",
        description: "Advanced solutions for technology companies",
        details: "We provide specialized IT services for technology companies including software development, cloud solutions, DevOps, and technical support services.",
        challenges: [
          "Rapid technological changes",
          "Scalability requirements",
          "Security concerns",
          "Talent acquisition",
          "Time-to-market pressure"
        ],
        solutions: [
          "Custom Software Development",
          "Cloud Solutions & Migration",
          "DevOps Implementation",
          "Technical Support Services",
          "Product Development",
          "QA & Testing Services"
        ],
        benefits: [
          "Accelerated development cycles",
          "Improved product quality",
          "Enhanced scalability",
          "Reduced operational costs",
          "Focus on core competencies"
        ],
        successStories: [
          "Provided DevOps consulting to a SaaS company that reduced deployment time by 70%",
          "Developed a custom CRM for a tech startup that improved sales productivity by 50%"
        ]
      }
    ],
    products: [
      {
        name: "CloudSync Pro",
        description: "Cloud-based file synchronization and collaboration platform",
        features: [
          "Real-time file synchronization",
          "Cross-platform compatibility",
          "Advanced sharing controls",
          "Version history",
          "Offline access",
          "End-to-end encryption",
          "Activity tracking",
          "Customizable storage plans"
        ],
        benefits: [
          "Improved team collaboration",
          "Secure file storage",
          "Increased productivity",
          "Reduced IT overhead",
          "Anytime, anywhere access"
        ],
        pricing: "Starting at $10/user/month",
        integrations: "Integrates with Microsoft Office 365, Google Workspace, Slack, and more"
      },
      {
        name: "SecureVault",
        description: "Advanced data encryption and secure storage solution",
        features: [
          "Military-grade encryption",
          "Secure cloud storage",
          "Multi-factor authentication",
          "Granular access controls",
          "Audit trails",
          "Data loss prevention",
          "Compliance reporting",
          "Automated backups"
        ],
        benefits: [
          "Enhanced data security",
          "Regulatory compliance",
          "Protection against breaches",
          "Secure remote access",
          "Peace of mind"
        ],
        pricing: "Starting at $25/user/month",
        integrations: "Compatible with all major cloud providers and enterprise systems"
      },
      {
        name: "Analytics Dashboard",
        description: "Real-time business intelligence and analytics platform",
        features: [
          "Real-time data visualization",
          "Customizable dashboards",
          "Advanced reporting",
          "Predictive analytics",
          "Data integration",
          "Collaboration tools",
          "Mobile access",
          "Alerts and notifications"
        ],
        benefits: [
          "Data-driven decision making",
          "Improved operational visibility",
          "Faster insights",
          "Better forecasting",
          "Competitive advantage"
        ],
        pricing: "Starting at $50/month",
        integrations: "Connects to over 100 data sources including databases, SaaS applications, and APIs"
      },
      {
        name: "CRM Plus",
        description: "Comprehensive customer relationship management system",
        features: [
          "Contact management",
          "Sales pipeline tracking",
          "Marketing automation",
          "Customer service tools",
          "Analytics and reporting",
          "Mobile access",
          "Workflow automation",
          "Integration capabilities"
        ],
        benefits: [
          "Improved customer relationships",
          "Increased sales productivity",
          "Enhanced marketing effectiveness",
          "Better customer service",
          "Centralized customer data"
        ],
        pricing: "Starting at $30/user/month",
        integrations: "Integrates with email, calendar, social media, and other business applications"
      },
      {
        name: "HR Management Suite",
        description: "Complete human resource management solution",
        features: [
          "Employee database",
          "Recruitment management",
          "Onboarding tools",
          "Performance management",
          "Time and attendance tracking",
          "Payroll processing",
          "Benefits administration",
          "Analytics and reporting"
        ],
        benefits: [
          "Streamlined HR processes",
          "Improved employee experience",
          "Better data management",
          "Compliance assurance",
          "Strategic HR insights"
        ],
        pricing: "Starting at $15/employee/month",
        integrations: "Connects with accounting systems, time tracking tools, and benefits providers"
      },
      {
        name: "Inventory Master",
        description: "Advanced inventory and supply chain management system",
        features: [
          "Real-time inventory tracking",
          "Demand forecasting",
          "Order management",
          "Supplier management",
          "Warehouse management",
          "Barcode scanning",
          "Reporting and analytics",
          "Multi-location support"
        ],
        benefits: [
          "Optimized inventory levels",
          "Reduced stockouts and overstocking",
          "Improved order fulfillment",
          "Lower carrying costs",
          "Enhanced supplier relationships"
        ],
        pricing: "Starting at $100/month",
        integrations: "Integrates with e-commerce platforms, accounting systems, and shipping carriers"
      },
      {
        name: "Project Tracker",
        description: "Project management and team collaboration tool",
        features: [
          "Task management",
          "Gantt charts",
          "Time tracking",
          "Resource allocation",
          "Team collaboration",
          "Document sharing",
          "Progress reporting",
          "Budget tracking"
        ],
        benefits: [
          "Improved project visibility",
          "Enhanced team collaboration",
          "Better resource utilization",
          "On-time project delivery",
          "Increased productivity"
        ],
        pricing: "Starting at $20/user/month",
        integrations: "Works with email, calendar, file storage, and communication tools"
      },
      {
        name: "Billing Pro",
        description: "Automated billing and invoicing solution",
        features: [
          "Invoice generation",
          "Recurring billing",
          "Payment processing",
          "Expense tracking",
          "Financial reporting",
          "Tax management",
          "Multi-currency support",
          "Client portal"
        ],
        benefits: [
          "Faster billing cycles",
          "Improved cash flow",
          "Reduced errors",
          "Better financial visibility",
          "Enhanced client experience"
        ],
        pricing: "Starting at $25/month",
        integrations: "Connects with accounting software, payment gateways, and CRM systems"
      },
      {
        name: "Marketing Automation",
        description: "All-in-one marketing automation platform",
        features: [
          "Email marketing",
          "Lead management",
          "Campaign management",
          "Landing page builder",
          "Social media management",
          "Analytics and reporting",
          "A/B testing",
          "CRM integration"
        ],
        benefits: [
          "Increased lead generation",
          "Improved campaign effectiveness",
          "Better lead nurturing",
          "Enhanced customer engagement",
          "Higher ROI on marketing"
        ],
        pricing: "Starting at $50/month",
        integrations: "Works with CRM systems, social media platforms, and analytics tools"
      },
      {
        name: "HelpDesk Central",
        description: "Customer support and ticket management system",
        features: [
          "Ticket management",
          "Knowledge base",
          "Multi-channel support",
          "Automation rules",
          "SLA management",
          "Reporting and analytics",
          "Customer satisfaction surveys",
          "Team collaboration"
        ],
        benefits: [
          "Improved support efficiency",
          "Faster resolution times",
          "Enhanced customer satisfaction",
          "Better resource allocation",
          "Data-driven improvements"
        ],
        pricing: "Starting at $20/agent/month",
        integrations: "Connects with CRM, communication tools, and other business systems"
      },
      {
        name: "Document Manager",
        description: "Enterprise document management system",
        features: [
          "Document storage",
          "Version control",
          "Access permissions",
          "Search and retrieval",
          "Workflow automation",
          "Audit trails",
          "Retention policies",
          "Collaboration tools"
        ],
        benefits: [
          "Centralized document repository",
          "Improved document security",
          "Enhanced collaboration",
          "Regulatory compliance",
          "Reduced storage costs"
        ],
        pricing: "Starting at $15/user/month",
        integrations: "Works with office suites, email systems, and other business applications"
      },
      {
        name: "Website Builder",
        description: "Drag-and-drop website creation platform",
        features: [
          "Drag-and-drop editor",
          "Responsive design templates",
          "E-commerce capabilities",
          "SEO tools",
          "Analytics integration",
          "Custom domains",
          "Mobile optimization",
          "Third-party integrations"
        ],
        benefits: [
          "Easy website creation",
          "Professional design without coding",
          "Fast time-to-market",
          "Cost-effective solution",
          "Full control over your website"
        ],
        pricing: "Starting at $10/month",
        integrations: "Connects with payment processors, marketing tools, and analytics platforms"
      },
      {
        name: "Mobile App Creator",
        description: "No-code mobile application development platform",
        features: [
          "Visual app builder",
          "Cross-platform compatibility",
          "Pre-built templates",
          "API integration",
          "Push notifications",
          "Offline capabilities",
          "App store deployment",
          "Analytics dashboard"
        ],
        benefits: [
          "Rapid app development",
          "No coding required",
          "Cost-effective solution",
          "Quick time-to-market",
          "Easy maintenance and updates"
        ],
        pricing: "Starting at $30/month",
        integrations: "Works with databases, APIs, and other business systems"
      }
    ],
    additionalInfo: {
      contact: {
        phone: "+91 9766313023",
        email: "contact@aethermind.com",
        supportEmail: "support@aethermind.com",
        salesEmail: "sales@aethermind.com",
        address: "123 Tech Park, Bangalore, India - 560001",
        officeHours: "Monday to Friday: 9:00 AM to 6:00 PM (IST)",
        responseTime: "We typically respond to inquiries within 24 hours"
      },
      process: {
        steps: [
          {
            name: "Discovery",
            description: "Understanding your business needs and objectives"
          },
          {
            name: "Planning",
            description: "Creating a detailed project plan and roadmap"
          },
          {
            name: "Design",
            description: "Developing UI/UX designs and technical architecture"
          },
          {
            name: "Development",
            description: "Building the solution using agile methodologies"
          },
          {
            name: "Testing",
            description: "Comprehensive quality assurance and testing"
          },
          {
            name: "Deployment",
            description: "Launching the solution and providing training"
          },
          {
            name: "Support",
            description: "Ongoing maintenance and support services"
          }
        ],
        methodology: "We follow Agile development methodology with 2-week sprints, regular demos, and continuous feedback loops to ensure the solution meets your evolving needs."
      },
      technologies: {
        frontend: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
        backend: ["Node.js", "Python", "Java", ".NET", "PHP", "Ruby", "Go"],
        mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
        database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server"],
        cloud: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"],
        devops: ["Docker", "Kubernetes", "Jenkins", "GitLab", "CI/CD Pipelines", "Terraform"]
      },
      certifications: [
        "ISO 9001:2015 - Quality Management Systems",
        "ISO 27001:2013 - Information Security Management",
        "Microsoft Gold Partner",
        "AWS Certified Partner",
        "Google Cloud Partner",
        "CMMI Level 3"
      ],
      partnerships: [
        {
          name: "Microsoft",
          type: "Gold Partner",
          benefits: "Access to latest technologies, training resources, and co-marketing opportunities"
        },
        {
          name: "Amazon Web Services",
          type: "Consulting Partner",
          benefits: "Technical support, training, and resources for cloud solutions"
        },
        {
          name: "Google Cloud",
          type: "Premier Partner",
          benefits: "Advanced technical support, training, and go-to-market resources"
        },
        {
          name: "Oracle",
          type: "Partner Network",
          benefits: "Access to Oracle technologies and resources for enterprise solutions"
        }
      ],
      blog: {
        topics: [
          "Digital Transformation",
          "Cloud Computing",
          "Cybersecurity",
          "Software Development",
          "Industry Trends",
          "Technology Insights",
          "Case Studies",
          "Product Updates"
        ],
        frequency: "New articles published weekly"
      },
      events: {
        upcoming: [
          {
            name: "Tech Innovation Summit 2025",
            date: "June 15-17, 2025",
            location: "Bangalore, India",
            description: "Join us to explore the latest technology trends and innovations"
          },
          {
            name: "Digital Transformation Conference",
            date: "August 22-24, 2025",
            location: "New York, USA",
            description: "Learn how digital transformation is reshaping industries"
          }
        ],
        webinars: [
          {
            name: "Cloud Security Best Practices",
            date: "July 10, 2025",
            description: "Learn how to secure your cloud infrastructure"
          },
          {
            name: "AI in Business",
            date: "July 25, 2025",
            description: "Discover how AI can transform your business operations"
          }
        ]
      }
    }
  };

  // Function to generate AI response based on user input
  const generateAIResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
      return "Hello! How can I help you today?";
    }
    
    // Check for company information
    if (lowerCaseMessage.includes('company') || lowerCaseMessage.includes('about')) {
      let response = `${websiteKnowledge.company.name} is a ${websiteKnowledge.company.description} founded in ${websiteKnowledge.company.founded}. Our mission is to ${websiteKnowledge.company.mission}.\n\n`;
      response += `Our vision is to ${websiteKnowledge.company.vision}.\n\n`;
      response += `Core Values:\n• ${websiteKnowledge.company.values.join('\n• ')}\n\n`;
      response += `Team: ${websiteKnowledge.company.team.size} with ${websiteKnowledge.company.team.expertise}. ${websiteKnowledge.company.team.structure}.\n\n`;
      response += `Locations:\n• ${websiteKnowledge.company.locations.join('\n• ')}\n\n`;
      response += `Achievements:\n• ${websiteKnowledge.company.achievements.join('\n• ')}`;
      return response;
    }
    
    // Check for "why choose us"
    if (lowerCaseMessage.includes('why choose us') || lowerCaseMessage.includes('why choose')) {
      return `Here are some reasons to choose us:\n• ${websiteKnowledge.company.whyChooseUs.join('\n• ')}`;
    }
    
    // Check for services
    if (lowerCaseMessage.includes('services') || lowerCaseMessage.includes('it solutions') || lowerCaseMessage.includes('solutions')) {
      return "We offer a variety of IT solutions including: " + websiteKnowledge.itSolutions.map(sol => sol.name).join(", ") + ". Which service would you like to know more about?";
    }
    
    // Check for specific IT solutions
    for (const solution of websiteKnowledge.itSolutions) {
      if (lowerCaseMessage.includes(solution.name.toLowerCase())) {
        let response = `${solution.name}: ${solution.description}\n\n${solution.details}\n\n`;
        
        if (solution.process) {
          response += `Our Process:\n• ${solution.process.join('\n• ')}\n\n`;
        }
        
        if (solution.technologies) {
          response += `Technologies Used:\n• ${solution.technologies.join('\n• ')}\n\n`;
        }
        
        if (solution.services) {
          response += `Services Included:\n• ${solution.services.join('\n• ')}\n\n`;
        }
        
        if (solution.benefits) {
          response += `Benefits:\n• ${solution.benefits.join('\n• ')}`;
        }
        
        return response;
      }
    }
    
    // Check for industries
    if (lowerCaseMessage.includes('industries')) {
      return "We serve various industries including: " + websiteKnowledge.industries.map(ind => ind.name).join(", ") + ". Which industry would you like to know more about?";
    }
    
    // Check for specific industries
    for (const industry of websiteKnowledge.industries) {
      if (lowerCaseMessage.includes(industry.name.toLowerCase())) {
        let response = `${industry.name}: ${industry.description}\n\n${industry.details}\n\n`;
        response += `Challenges:\n• ${industry.challenges.join('\n• ')}\n\n`;
        response += `Our Solutions:\n• ${industry.solutions.join('\n• ')}\n\n`;
        response += `Benefits:\n• ${industry.benefits.join('\n• ')}\n\n`;
        response += `Success Stories:\n• ${industry.successStories.join('\n• ')}`;
        return response;
      }
    }
    
    // Check for products
    if (lowerCaseMessage.includes('products')) {
      return "We offer a range of products including: " + websiteKnowledge.products.map(prod => prod.name).join(", ") + ". Which product would you like to know more about?";
    }
    
    // Check for specific products
    for (const product of websiteKnowledge.products) {
      if (lowerCaseMessage.includes(product.name.toLowerCase())) {
        let response = `${product.name}: ${product.description}\n\n`;
        response += `Key Features:\n• ${product.features.join('\n• ')}\n\n`;
        response += `Benefits:\n• ${product.benefits.join('\n• ')}\n\n`;
        response += `Pricing: ${product.pricing}\n\n`;
        response += `Integrations: ${product.integrations}`;
        return response;
      }
    }
    
    // Check for contact information
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('phone') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('address')) {
      let response = `Contact Information:\n`;
      response += `Phone: ${websiteKnowledge.additionalInfo.contact.phone}\n`;
      response += `Email: ${websiteKnowledge.additionalInfo.contact.email}\n`;
      response += `Support: ${websiteKnowledge.additionalInfo.contact.supportEmail}\n`;
      response += `Sales: ${websiteKnowledge.additionalInfo.contact.salesEmail}\n`;
      response += `Address: ${websiteKnowledge.additionalInfo.contact.address}\n`;
      response += `Office Hours: ${websiteKnowledge.additionalInfo.contact.officeHours}\n`;
      response += `Response Time: ${websiteKnowledge.additionalInfo.contact.responseTime}`;
      return response;
    }
    
    // Check for process
    if (lowerCaseMessage.includes('process') || lowerCaseMessage.includes('methodology')) {
      let response = `Our Process:\n`;
      response += websiteKnowledge.additionalInfo.process.steps.map((step, index) => `${index + 1}. ${step.name}: ${step.description}`).join('\n');
      response += `\n\nMethodology: ${websiteKnowledge.additionalInfo.process.methodology}`;
      return response;
    }
    
    // Check for technologies
    if (lowerCaseMessage.includes('technologies') || lowerCaseMessage.includes('tech stack')) {
      let response = `Technologies We Work With:\n\n`;
      response += `Frontend: ${websiteKnowledge.additionalInfo.technologies.frontend.join(', ')}\n\n`;
      response += `Backend: ${websiteKnowledge.additionalInfo.technologies.backend.join(', ')}\n\n`;
      response += `Mobile: ${websiteKnowledge.additionalInfo.technologies.mobile.join(', ')}\n\n`;
      response += `Database: ${websiteKnowledge.additionalInfo.technologies.database.join(', ')}\n\n`;
      response += `Cloud: ${websiteKnowledge.additionalInfo.technologies.cloud.join(', ')}\n\n`;
      response += `DevOps: ${websiteKnowledge.additionalInfo.technologies.devops.join(', ')}`;
      return response;
    }
    
    // Check for certifications
    if (lowerCaseMessage.includes('certifications') || lowerCaseMessage.includes('certified')) {
      return `Our Certifications:\n• ${websiteKnowledge.additionalInfo.certifications.join('\n• ')}`;
    }
    
    // Check for partnerships
    if (lowerCaseMessage.includes('partnerships') || lowerCaseMessage.includes('partners')) {
      let response = `Our Partnerships:\n`;
      response += websiteKnowledge.additionalInfo.partnerships.map(partner => `${partner.name} (${partner.type}): ${partner.benefits}`).join('\n\n');
      return response;
    }
    
    // Check for blog
    if (lowerCaseMessage.includes('blog') || lowerCaseMessage.includes('resources')) {
      let response = `Our Blog covers topics such as:\n• ${websiteKnowledge.additionalInfo.blog.topics.join('\n• ')}\n\n`;
      response += `New articles are published ${websiteKnowledge.additionalInfo.blog.frequency}.`;
      return response;
    }
    
    // Check for events
    if (lowerCaseMessage.includes('events') || lowerCaseMessage.includes('webinars')) {
      let response = `Upcoming Events:\n`;
      response += websiteKnowledge.additionalInfo.events.upcoming.map(event => `${event.name} (${event.date} - ${event.location}): ${event.description}`).join('\n\n');
      response += `\n\nUpcoming Webinars:\n`;
      response += websiteKnowledge.additionalInfo.events.webinars.map(webinar => `${webinar.name} (${webinar.date}): ${webinar.description}`).join('\n\n');
      return response;
    }
    
    // Check for pricing
    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('pricing')) {
      return "Our pricing varies based on the specific requirements of your project. For services, we provide customized quotes after understanding your needs. For products, pricing information is available on each product page. Please contact us for a detailed quote tailored to your requirements.";
    }
    
    // Check for careers
    if (lowerCaseMessage.includes('career') || lowerCaseMessage.includes('job') || lowerCaseMessage.includes('work')) {
      return "We're always looking for talented individuals to join our team. Current openings include Software Developers, UI/UX Designers, Digital Marketing Specialists, and Sales Executives. Please send your resume to careers@aethermind.com with the subject line 'Application for [Position]'. We offer competitive salaries, growth opportunities, and a positive work environment.";
    }
    
    // Check for general help
    if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('support')) {
      return "I'm here to help! You can ask me about our company, IT solutions, industries, products, contact information, process, technologies, certifications, partnerships, blog, events, careers, or any other questions you might have.";
    }
    
    // Default response for unrecognized queries
    const defaultResponses = [
      "I'm not sure I understand. Could you please rephrase your question?",
      "That's an interesting question. I don't have specific information about that, but I'd be happy to help with questions about our company, IT solutions, industries, products, or other services.",
      "I don't have enough information to answer that question accurately. Is there something else I can help you with?",
      "I'm still learning and don't have an answer for that yet. Feel free to ask me about our services or company information.",
      "I'd be happy to help with questions about our company, services, or products. Could you please provide more details about what you're looking for?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };
  
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai"
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-40 right-6 z-50 group"
          aria-label="Chat with AI Assistant"
        >
          <div className="relative">
            {/* Pulsing animation background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#008080] to-[#0066CC] rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Button with gradient and shadow */}
            <div className="relative bg-gradient-to-r from-[#008080] to-[#0066CC] rounded-full p-1 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <FaRobot className="text-2xl text-[#008080] group-hover:text-[#0066CC] transition-colors duration-300" />
              </div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#1A3A5F] text-white text-xs rounded py-1 px-2 whitespace-nowrap">
              Chat with AI Assistant
            </div>
          </div>
        </button>
      )}

      {/* Floating chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E8F0]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1A3A5F] to-[#0066CC] text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaRobot className="text-xl mr-3" />
              <div>
                <h1 className="text-lg font-bold">AI Assistant</h1>
                <p className="text-xs text-blue-100">Free to use - Ask me anything</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-[#F5F7FA]">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-[#0066CC] text-white rounded-tr-none' 
                      : 'bg-white text-[#2C3E50] border border-[#E2E8F0] rounded-tl-none'
                  }`}
                >
                  {message.text.split('\n').map((line, i) => (
                    <p key={i} className="mb-1 last:mb-0 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-white text-[#2C3E50] border border-[#E2E8F0] rounded-tl-none rounded-2xl px-4 py-3 flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="ml-2 text-sm">AI is typing...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="bg-white p-4 border-t border-[#E2E8F0]">
            <div className="flex items-center">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about our company, IT solutions, industries, products, or more..."
                className="flex-1 border border-[#E2E8F0] rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#0066CC] resize-none text-sm"
                rows={1}
              />
              <button 
                onClick={handleSendMessage}
                className="ml-2 bg-gradient-to-r from-[#008080] to-[#0066CC] text-white rounded-full p-3 hover:from-[#0066CC] hover:to-[#005F73] transition-all duration-300"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
          
          {/* Quick Suggestions */}
          <div className="bg-white p-4 border-t border-[#E2E8F0]">
            <h2 className="text-sm font-semibold text-[#1A3A5F] mb-2">Try asking me:</h2>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setInputMessage("Tell me about your company")}
                className="bg-[#F5F7FA] hover:bg-[#E2E8F0] text-[#2C3E50] px-3 py-1 rounded-full text-xs transition-colors duration-200"
              >
                Tell me about your company
              </button>
              <button 
                onClick={() => setInputMessage("What IT solutions do you offer?")}
                className="bg-[#F5F7FA] hover:bg-[#E2E8F0] text-[#2C3E50] px-3 py-1 rounded-full text-xs transition-colors duration-200"
              >
                What IT solutions do you offer?
              </button>
              <button 
                onClick={() => setInputMessage("What products do you offer?")}
                className="bg-[#F5F7FA] hover:bg-[#E2E8F0] text-[#2C3E50] px-3 py-1 rounded-full text-xs transition-colors duration-200"
              >
                What products do you offer?
              </button>
              <button 
                onClick={() => setInputMessage("How can I contact you?")}
                className="bg-[#F5F7FA] hover:bg-[#E2E8F0] text-[#2C3E50] px-3 py-1 rounded-full text-xs transition-colors duration-200"
              >
                How can I contact you?
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}