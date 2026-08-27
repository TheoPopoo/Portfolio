import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Theo Poletto",
    title: "Administrateur Systèmes & Réseaux",
    status: "Recherche alternance Cybersécurité — Mastère IPSSI (Bac+5, 2 ans) — dès septembre 2026",
    objective: "Administrateur systèmes et réseaux en poste (CDI), candidat en alternance dans le cadre d’un Mastère Cybersécurité (Bac+5, IPSSI, 2 ans, rentrée janvier 2027). Ouvert à découvrir les différents domaines du secteur (SOC, sécurité opérationnelle, gouvernance).",
    description: "Administrateur systèmes et réseaux en poste (CDI chez Afludia), en reconversion vers la cybersécurité via un Mastère en alternance (IPSSI, 2 ans, rentrée janvier 2027). J’interviens sur la gestion d’infrastructures, la virtualisation, la supervision et le développement d’outils internes (PowerShell, C#, Blazor) — un socle systèmes/réseaux directement mobilisable pour la défense d’infrastructures.",
    avatar: "/assets/image/avatar.png"
  },

  projects: [
    {
      id: 1,
      title: "Cluster SQL Server sécurisé & notifications Teams",
      images: [],
      description: "Déploiement d’un cluster SQL Server (haute disponibilité) avec segmentation réseau via VLAN, réalisé en contexte professionnel chez Afludia.",
      technologies: ["SQL Server", "VLAN", "PowerShell", "Microsoft Teams"],
      achievements: [
        "Déploiement et configuration d’un cluster SQL Server pour la haute disponibilité",
        "Segmentation réseau via VLAN pour sécuriser l’accès aux bases de données",
        "Notifications automatisées (alertes) via webhooks Microsoft Teams"
      ]
    },

    {
      id: 2,
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
      id: 3,
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
      id: 4,
      title: "Supervision & SIEM (découverte)",
      images: [
        "/assets/image/esiway/es01.png"
      ],
      description: "Installation et prise en main de Security Onion (NSM/IDS) en environnement de test, couplée à Zabbix/Grafana.",
      technologies: ["Zabbix", "Grafana", "Security Onion"],
      achievements: [
        "Installation et configuration de Security Onion en environnement de test",
        "Supervision associée via Zabbix/Grafana",
        "Première approche des concepts NSM/IDS et centralisation des logs"
      ]
    },

    {
      id: 5,
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
      school: "IPSSI",
      degrees: [
        {
          degree: "Mastère Cybersécurité (Bac+5)",
          period: "Rentrée Janvier 2027",
          description: "Alternance 2 ans, rythme 3 semaines entreprise / 1 semaine école."
        }
      ]
    },
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
      description: "Supervision, sécurisation et automatisation de l’infrastructure IT au quotidien.",
      achievements: [
        "Supervision et détection d’anomalies sur l’infrastructure via Zabbix/Grafana (15 à 20 serveurs, dont un cluster)",
        "Automatisation et durcissement des déploiements via PowerShell (WinRM, mises à jour) sur un parc de 50 postes",
        "Développement d’une interface Blazor de centralisation de l’administration (gestion des accès)",
        "Gestion d’infrastructures virtualisées et conteneurisées"
      ]
    },
    {
      position: "Administrateur Système",
      company: "ArcelorMittal",
      period: "Juin 2024 - Septembre 2024",
      description: "Administration et sécurisation des accès sur un parc de serveurs physiques et virtuels.",
      achievements: [
        "Déploiement de serveurs physiques et virtuels",
        "Administration des droits et accès via Active Directory et System Center",
        "Supervision d’infrastructures et gestion des incidents"
      ]
    },
    {
      position: "Technicien Systèmes & Réseaux (Intérim)",
      company: "Röchling",
      period: "Juillet 2023",
      description: "Mission d’intérim en support technique et déploiement de postes.",
      achievements: [
        "Support technique et gestion des tickets",
        "Déploiement de postes via SCCM",
        "Support VoIP (3CX) et interventions réseau"
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
      category: "Cybersécurité & Supervision",
      icon: "🔐",
      color: "from-slate-400 to-slate-500",
      skills: [
        "Security Onion",
        "Zabbix",
        "Grafana",
        "Azure AD / Entra ID",
        "VLAN"
      ]
    },
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
