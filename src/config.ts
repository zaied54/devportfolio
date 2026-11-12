export const siteConfig = {
  name: "Zaied Zaman",
  title: "Site Reliability Engineer",
  description:
    "Portfolio of Zaied Zaman, a Site Reliability Engineer focused on reliable, automated, and observable platforms.",
  accentColor: "#1d4ed8",
  social: {
    email: "zaied.zaman.uwo@gmail.com",
    linkedin: "https://www.linkedin.com/in/knowzaied/",
    twitter: "",
    github: "https://github.com/zaied54",
  },
  aboutMe:
    "Site Reliability Engineer focused on making complex platforms more reliable and observable. I combine automation, Grafana expertise, and service-level thinking to give teams and clients clearer insight into infrastructure health while reducing operational overhead.",
  skills: [
    "AWS",
    "Azure",
    "Terraform",
    "Dynatrace",
    "Grafana",
    "Kubernetes",
    "Azure DevOps",
    "GitHub Actions",
    "GitHub Copilot",
    "Java",
    "Python",
    "GitHub",
    "Docker",
  ],
  projects: [
    {
      name: "EKS Cluster Deployment with Terraform and AWS",
      description:
        "Provisioned a scalable Amazon EKS cluster and supporting AWS infrastructure with reusable Terraform modules, including networking, security groups, and IAM roles.",
      link: "https://github.com/zaied54/AWS_Terraform_EKS/tree/main",
      skills: ["AWS", "EKS", "Kubernetes", "Terraform"],
    },
    {
      name: "Infrastructure as Code with Terraform and AWS",
      description:
        "Automated AWS resource provisioning for EC2, VPC, and IAM with reusable Terraform modules and security policies to make infrastructure deployments consistent and maintainable.",
      link: "https://github.com/zaied54/AWS_IaC_Terraform",
      skills: ["AWS", "Terraform", "IAM"],
    },
    {
      name: "CI/CD Pipeline with GitHub Actions and AWS",
      description:
        "Built a CI/CD pipeline for a QR code application, automating build, test, and deployment with GitHub Actions, Docker, and Terraform.",
      link: "https://github.com/zaied54/QR_CODE_CICD",
      skills: ["GitHub Actions", "AWS", "Docker", "Terraform"],
    },
    {
      name: "Spring Boot REST API for Market Data",
      description:
        "Developed a Spring Boot web application that retrieves stock market data from an API and supports viewing, updating, deleting, and persisting records in a Dockerized PostgreSQL database.",
      link: "https://github.com/jarviscanada/jarvis_data_eng_zaied/tree/master/springboot",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
  ],
  experience: [
    {
      company: "CIBC",
      title: "Site Reliability Engineer",
      dateRange: "July 2025 - Present",
      bullets: [
        "Designed and automated Grafana dashboard creation and client-facing metrics publication, reducing manual workload by 90% and license consumption by 80%.",
        "Deployed and managed multiple Grafana instances, optimizing queries for efficiency and maintaining platform health.",
        "Designed alerts and defined SLIs/SLOs for Solace, Redis, and Kafka infrastructure to make reliability measurable and support proactive monitoring.",
        "Built and maintained CI/CD pipelines with GitHub Actions and Azure DevOps, improving release reliability and reducing deployment time by 30-50%.",
        "Automated build, test, and deployment workflows for OpenShift and Kubernetes applications, reducing manual production-release steps and human error.",
        "Developed reusable Helm charts to standardize application packaging and deployment configuration.",
      ],
    },
    {
      company: "CIBC",
      title: "Tech Lead, AIOps & DevOps",
      dateRange: "April 2024 - June 2025",
      bullets: [
        "Led enterprise AIOps strategy implementation across the Financial Crimes and Anti-Money Laundering portfolio.",
        "Coordinated Dynatrace and Splunk monitoring and observability implementations across 80% of Tier 1, Tier 1c, and Tier 2 applications.",
        "Advised development teams on enterprise monitoring and used Dynatrace and Splunk analytics to reduce operational workload and incident resolution time by approximately 60%.",
      ],
    },
    {
      company: "CIBC",
      title: "Consultant, Application Operations, DevOps & SRE",
      dateRange: "October 2020 - March 2024",
      bullets: [
        "Implemented Azure DevOps CI pipelines for automated code building, packaging, and promotion to GitHub and Artifactory.",
        "Built Azure DevOps and GitHub Actions CD pipelines to automate deployments to on-premises and cloud servers.",
        "Advised multiple teams on DevOps practices and developed proof-of-concept solutions for enterprise initiatives.",
      ],
    },
    {
      company: "Jarvis Consulting Group",
      title: "Data Engineer",
      dateRange: "April 2020 - September 2020",
      bullets: [
        "Developed Java, Bash, and SQL solutions and Spring Boot services using GitFlow and team development practices.",
        "Collaborated with teammates using Agile methodologies.",
      ],
    },
  ],
  education: [
    {
      school: "University of Western Ontario",
      degree: "Master's in Computer Science",
      dateRange: "2017 - 2019",
      achievements: ["GPA: 3.9/4.0", "London, Ontario, Canada"],
    },
    {
      school: "Islamic University of Technology",
      degree: "Bachelor's in Electrical and Electronic Engineering",
      dateRange: "2011 - 2015",
      achievements: ["CGPA: 3.89/4.0", "Bangladesh"],
    },
  ],
};
