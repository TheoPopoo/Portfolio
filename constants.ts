import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Theo Poletto",
    title: "Administrateur Systèmes & Réseaux",
    status: "Spécialisé en systèmes, réseaux et cybersécurité",
    objective: "Recherche d’opportunités en administration systèmes & réseaux, avec une forte dimension automatisation et sécurité",
    description: "Administrateur systèmes et réseaux avec une appétence pour la cybersécurité et l’automatisation. J’interviens sur la gestion d’infrastructures, la virtualisation, la supervision et le développement d’outils internes (PowerShell, C#, Blazor) pour optimiser les environnements IT.",
    avatar: "/assets/image/avatar.png"
  },

  projects: [
    {
      id: 1,
      title: "Plateforme d’administration distante",
      images: [
        "/assets/image/trd/trdpr1.png",
        "/assets/image/trd/trdpr2.png"
      ],
      description: "Interface web permettant de piloter et administrer des machines à distance via WinRM.",
      technologies: ["PowerShell", "WinRM", "Blazor", "C#"],
      achievements: [
        "Exécution de scripts à distance (redémarrage, processus, déploiement)",
        "Gestion multi-machines via interface web",
        "Centralisation des actions d’administration",
        "Retour en temps réel des exécutions"
      ]
    },

    {
      id: 2,
      title: "Infrastructure Docker & Services Réseau",
      images: [
        "/assets/image/mbyte/mbytepr1.png",
        "/assets/image/mbyte/mbytepr2.png"
      ],
      description: "Déploiement de services réseau et outils via Docker dans un environnement virtualisé.",
      technologies: ["Docker", "dnsmasq", "Bitwarden", "Linux"],
      achievements: [
        "Déploiement de services réseau conteneurisés",
        "Gestion DNS avec dnsmasq",
        "Mise en place d’un gestionnaire de mots de passe sécurisé (Bitwarden)",
        "Optimisation des services en environnement virtualisé"
      ]
    },

    {
      id: 3,
      title: "Supervision & SIEM",
      images: [
        "/assets/image/esiway/es01.png"
      ],
      description: "Mise en place d’une infrastructure de supervision et de sécurité.",
      technologies: ["Zabbix", "Grafana", "Promtail", "Security Onion"],
      achievements: [
        "Supervision complète des infrastructures",
        "Mise en place d’alerting",
        "Centralisation des logs",
        "Analyse de sécurité via SIEM"
      ]
    },

    {
      id: 4,
      title: "Automatisation & Scripts IT",
      images: [
        "/assets/image/prigra/prigra.png"
      ],
      description: "Développement de scripts pour automatiser les tâches IT.",
      technologies: ["PowerShell", "Python"],
      achievements: [
        "Automatisation des mises à jour Windows",
        "Déploiement d’applications à distance",
        "Gestion des machines via WinRM",
        "Gain de temps significatif sur les tâches récurrentes"
      ]
    }
  ],

  education: [
    {
      school: "Lycée Henri Loritz",
      degrees: [
        {
          degree: "BTS SNIR",
          period: "2020 - 2022",
          description: "Spécialisation systèmes et réseaux, administration, développement et infrastructures."
        }
      ]
    }
  ],

  experience: [
    {
      position: "Administrateur Systèmes & Réseaux / Développeur",
      company: "Afludia",
      period: "Octobre 2024 - Aujourd’hui",
      description: "",
      achievements: [
        "Développement d’outils internes en C# et SQL Server",
        "Automatisation des tâches via PowerShell (WinRM, déploiement, mises à jour)",
        "Création d’une interface web en Blazor pour centraliser l’administration",
        "Mise en place de supervision (Zabbix, Grafana)",
        "Gestion d’infrastructures virtualisées et conteneurisées"
      ]
    },
    {
      position: "Administrateur Système",
      company: "ArcelorMittal",
      period: "Juin 2024 - Septembre 2024",
      description: "",
      achievements: [
        "Déploiement de serveurs physiques et virtuels",
        "Administration Active Directory et System Center",
        "Supervision d’infrastructures",
        "Gestion des incidents"
      ]
    },
    {
      position: "Technicien Systèmes & Réseaux",
      company: "Röchling",
      period: "Juillet 2023",
      description: "",
      achievements: [
        "Support technique et gestion des tickets",
        "Déploiement de postes via SCCM",
        "Support VoIP (3CX)",
        "Interventions réseau"
      ]
    }
  ],

  contact: {
    email: "theopoleto54@gmail.com",
    phone: "06 95 84 99 70",
    linkedin: "https://www.linkedin.com/in/theo-poletto/",
    github: "",
    location: "France"
  },

  skills: [
    "Windows Server",
    "Linux",
    "Active Directory",
    "PowerShell",
    "Docker",
    "Proxmox",
    "VMware",
    "Zabbix",
    "Grafana",
    "Security",
    "Réseaux",
    "Virtualisation"
  ],

  skillCategories: [
    {
      category: "Systèmes",
      icon: "🖥️",
      color: "from-slate-400 to-slate-500",
      skills: [
        "Windows Server",
        "Linux",
        "Active Directory",
        "Hyper-V",
        "Proxmox"
      ]
    },
    {
      category: "Réseaux",
      icon: "🌐",
      color: "from-slate-400 to-slate-500",
      skills: [
        "VLAN",
        "DHCP",
        "DNS",
        "NAT",
        "Routage"
      ]
    },
    {
      category: "Automatisation",
      icon: "⚙️",
      color: "from-slate-400 to-slate-500",
      skills: [
        "PowerShell",
        "WinRM",
        "Scripting",
        "Python"
      ]
    },
    {
      category: "Dev & Outils",
      icon: "💻",
      color: "from-slate-400 to-slate-500",
      skills: [
        "C#",
        ".NET",
        "Blazor",
        "SQL Server",
        "Git"
      ]
    },
    {
      category: "Cybersécurité & Supervision",
      icon: "🔐",
      color: "from-slate-400 to-slate-500",
      skills: [
        "Zabbix",
        "Grafana",
        "Security Onion",
        "Monitoring",
        "SIEM"
      ]
    }
  ],

  hobbies: [],

  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Technique / professionnel" }
  ],

  certifications: [
    { name: "CCNA 1", issuer: "Cisco", date: "Obtenu" }
  ]
};
